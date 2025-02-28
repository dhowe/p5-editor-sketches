function setup() {
  createCanvas(400, 400);
  let q = new HistQ(5);
  for (let i = 0; i < 10; i++) {
    q.push(i);
  }
  console.log(q.toString());
  q.push("old");
  console.log(q.toString());
}


class HistQ {
  constructor(sz) {
    this.data = [];
    this.capacity = sz;
  }
  push(item) {
    this.data.push(item);
    if (this.data.length > this.capacity) {
      this.data.shift();
    }
  }
  includes(i) {
    return this.data.indexOf(i) > -1;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  pop() {
    return this.data.pop();
  }
  oldest() {
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  clear() {
    this.data.length = 0;
    return this;
  }
  toString() {
    return JSON.stringify(this.data);
  }
}