
import PostMessage from "../models/postMessage.js";

//Logic for the getPosts Controller:
export const getPosts = async (req, res) => {
        try {
        const postMessages = await PostMessage.find();
        console.log(postMessages)

        res.status(200).json({postMessages: postMessages})
            
    } catch (error) {

        res.status(200).json({message: error.message})
        
    }
};



//Logic for the CreatePost Controller:

export const createPost = async (req, res) => {
      
    const body = req.body

    const newPost = new PostMessage(post)

    try {
          await newPost.save();
          res.status(201).json({newPost: newPost})
        
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}