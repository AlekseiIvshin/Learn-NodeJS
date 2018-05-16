const fs = require('fs');

function readFileSync(filePath) {
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    console.log(err);
  }
  return content;
}


module.exports.readFileSync = readFileSync;
