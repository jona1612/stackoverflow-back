const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions"
    },
    answer: String,
    // body: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    user: Object,
    // comment_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Comments"
    // }
})

module.exports = mongoose.model("answers", answerSchema);