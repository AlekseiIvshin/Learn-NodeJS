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

function readFileAsync(filePath, onError, onSuccess) {
  fs.readFile(filePath, 'utf-8', function(err, content) {
    if (err) {
       onError(err);
    } else {
      onSuccess(content);
    }
  });
}

module.exports.readFileSync = readFileSync;
module.exports.readFileAsync = readFileAsync;
