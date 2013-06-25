var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');

Http.createServer(Stack(
  Creationix.log(),
  require('wheat')(false ? process.env.HOME + "/howtonode" : __dirname +"/..")
)).listen(80);

