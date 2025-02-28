class Fracture {
  constructor(data, opts = {}) {
    this.k = opts.k || 3;
    this.points = data;
    this.clusters = [];
    this.storePrevious = opts.storePrevious || false;
    this.makeClusters(this.points, this.clusters);
  }

  step() {
    let next = [];
    for (let i = 0; i < this.clusters.length; i++) {
      this.makeClusters(this.clusters[i].data, next);
    }
    if (!this.storePrevious) this.clusters = [];
    this.clusters.push(...next);
    console.log(this.clusters.length + " clusters");
  }

  makeClusters(points, arr) {
    if (!points || !points.length) return;

    let groups = [];

    if (points.length >= this.k) {
      let cdata = skmeans(points, this.k);
      for (let i = 0; i < cdata.idxs.length; i++) {
        let cidx = cdata.idxs[i];
        if (!groups.hasOwnProperty(cidx)) groups[cidx] = [];
        //groups[cidx].push({ x: points[i][0], y: points[i][1] });
        groups[cidx].push([points[i][0], points[i][1]]);
      }
    } else {
      groups.push(new ConvexHull(points));
    }

    groups.forEach((g) => g.length && arr.push(new ConvexHull(g)));
  }

  draw(showPoints) {
    this.clusters.forEach((c, i) => {
      if (!c.data.length) return;
      fill(colors[i % colors.length]);
      beginShape();
      c.path.forEach((h) => vertex(h.x, h.y));
      endShape(CLOSE);
      stroke(0);
      if (showPoints) c.data.forEach((h) => point(h[0], h[1]));
    });
  }
}
