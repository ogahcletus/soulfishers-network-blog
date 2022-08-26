import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js'

//setup express server
const app = express();

//setup MongoDB dataBase www.mongodb/cloud/atlas:
//mongodb+srv://ogahcletus2022:soul_fishers1@cluster0.qmimfbb.mongodb.net/?retryWrites=true&w=majority


const CONNECTION_URL = 'mongodb+srv://ogahcletus2022:soul_fishers1@cluster0.qmimfbb.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8000;

mongoose.connect (CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log('Server is connected to Mongoose DataBase at port:', PORT)))
    
    .catch((error) => console.log(error.message));


    ////setup the middleware
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors()); 
   
  //setup middlewares for routes
app.use('/posts', postRoutes)
    

    //Once connected to the DataBase, next is to create the routes

    