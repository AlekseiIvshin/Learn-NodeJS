var app = require('./app/App.js');
var dataAdapter = require('./app/dataAdapter.js');

console.log(app.greeting('Test'));

console.log('\nLet\'s read file sync:\n');
console.log(dataAdapter.readFileSync('./data/heap.txt'));
console.log('\nThat was sync file reading\n');

console.log('\nLet\'s read file async:\n');
dataAdapter.readFileAsync(
  './data/heap.txt', 
  function(err){console.log(err)},
  function(content){console.log(content)}
);
console.log('\nThat was async file reading\n');
