var mongoose = require('mongoose');
var schema1 = mongoose.Schema;
var saveheadlines = new schema1({
   "Author" : String,
   "Title" : String,
   "Description" : String,
   "Url" : String,
   "urlToImage" : String,
   "PublishedAt" : String,
   "Comments":String
})
module.exports = mongoose.model('users',saveheadlines);
