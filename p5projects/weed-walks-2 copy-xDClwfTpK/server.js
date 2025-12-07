const fs = require('fs');
const dir = 'data/';

fs.readdir(dir, (err, files) => {
  let totalFiles = files.length;
  console.log(totalFiles);
});
