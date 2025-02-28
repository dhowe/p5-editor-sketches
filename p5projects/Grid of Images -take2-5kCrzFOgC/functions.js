function loadImagesByNum(startNum, endNum, fileExt) {
  let tmp = [];
  for (let i = startNum; i <= endNum; i++) {
    tmp.push(loadImage(i + fileExt));
  }
  return tmp;
}