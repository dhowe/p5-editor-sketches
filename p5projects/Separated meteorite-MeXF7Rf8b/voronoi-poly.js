function voronoiPolys(points, width = 1024, height = 1024) {
  let delaunay = new d3.Delaunay(points.flat());
  let voronoi = delaunay.voronoi([0, 0, width, height]);
  let polygons = toPolygons(voronoi);
  let centroids = toCentroids(polygons);
  let triangles = toTriangles(delaunay);
  return { polygons, centroids, delaunay, triangles };
}

function toTriangles(delaunay) {
  const result = [];
  const { points, triangles } = delaunay;
  for (let i = 0; i < triangles.length; i += 3) {
    const a = [points[triangles[i] * 2], points[triangles[i] * 2 + 1]];
    const b = [points[triangles[i + 1] * 2], points[triangles[i + 1] * 2 + 1]];
    const c = [points[triangles[i + 2] * 2], points[triangles[i + 2] * 2 + 1]];
    result.push({ points: [a, b, c] });
  }
  return result;
}

function toCentroids(polygons) {
  let centroids = [];
  for (let i = 0; i < polygons.length; i++) {
    centroids.push(...polygons[i].centroid);
  }
  return centroids;
}

function toPolygons(voronoi) {
  let polys = [];
  for (let i = 0; i < voronoi.delaunay.points.length; i += 2) {
    const poly = voronoi.cellPolygon(i >> 1);
    if (poly) polys.push(formatPoly(poly));
  }
  return polys;
}

function formatPoly(points) {
  let centroid = polyCentroid(points);
  let radius = closestEdgeToCentroid(points);
  return { points, centroid, radius };
}

function closestEdgeToCentroid(points) {
  const centroid = polyCentroid(points);
  const pointsSorted = sortPointsByAngle(centroid, points);
  let closest = distToSegment(centroid, pointsSorted[0], pointsSorted[1]);
  for (let i = 1; i < points.length - 1; i++) {
    if (points[i + 1]) {
      const dist = distToSegment(
        centroid,
        pointsSorted[i],
        pointsSorted[i + 1]
      );
      if (dist < closest) closest = dist;
    }
  }
  return closest;
}

function sortPointsByAngle(centroid, points) {
  const centerPoint = centroid;
  const sorted = points.slice(0);
  const sortByAngle = (p1, p2) => {
    return ((Math.atan2(p1[1] - centerPoint[1], p1[0] - centerPoint[0]) * 180) / Math.PI
      - (Math.atan2(p2[1] - centerPoint[1], p2[0] - centerPoint[0]) * 180) / Math.PI
    );
  };
  sorted.sort(sortByAngle);
  return sorted;
}

function polyCentroid(points) { // from d3
  let a, c, i = -1, x = 0, k = 0, y = 0;
  let n = points.length, b = points[n - 1];
  while (++i < n) {
    a = b;
    b = points[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }
  k *= 3;
  return [x / k, y / k];
}

// adapted from https://gist.github.com/mattdesl/47412d930dcd8cd765c871a65532ffac
function distToSegment(p, v, w) {    

  function sqr(x) { return x * x; }
  function dist2(v, w) { return sqr(v[0] - w[0]) + sqr(v[1] - w[1]); }
  let l2 = dist2(v, w);
  if (l2 !== 0) {
    let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.sqrt(dist2(p, [v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1])]));
  }
  else {
    return Math.sqrt(dist2(p, v));
  }
}