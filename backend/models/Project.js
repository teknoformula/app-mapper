//Post Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
  project_name: String,
  project_summary: String,
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0}
})

module.exports = mongoose.model('Project', ProjectSchema )