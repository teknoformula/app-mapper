const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: String,
  score: {type: Number, default: 0},
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}] 
});

module.exports = mongoose.model("Comment", CommentSchema);