const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
    name: String,
    email : String,
    story: String,
}, {timestamps: true})




module.exports = mongoose.model('stories', StorySchema)