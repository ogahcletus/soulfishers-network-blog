import mongoose from 'mongoose';


// Define the schemas
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likedCount: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: new Date()
    }

});


//Define the Model:
const PostMessage = mongoose.model('PostMessage', postSchema);




export default PostMessage;