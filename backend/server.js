import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import University from './models/universityModel.js';
import Review from './models/ReviewModel.js';
import bodyParser from 'body-parser'
import fs from 'fs'
import asyncHandler from 'express-async-handler';
import multer from 'multer';
import universityRoutes from './routes/universityRoutes.js';


// set storage
var storage = multer.diskStorage({
    destination : function ( req , file , cb ){
        cb(null, 'uploads')
    },
    filename : function (req, file , cb){
        // image.jpg
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})
var store = multer({ storage : storage })

dotenv.config();

connectDB();

const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.post('/add',store.single('image'),(req,res)=>{
  console.log(req.file)
  const newReview=new Review({
    comment:req.body.comment,
    rating:req.body.rating,
    name:req.body.name
  })
  newReview
    .save()
    .then(()=>res.json("Article posted"))
    .catch(error=>res.status(400).json(`Error:${error}`))
})

app.use('/api/university', universityRoutes);
app.post('/addUni',store.array('images', 12),(req,res,next)=>{
  const files=req.files
  console.log('check1')
  if(!files){
    console.log('checkfalse')
    const error = new Error('Please choose files');
    error.httpStatusCode = 400;
    return next(error)
  }
  let imgArray = files.map((file) => {
    let img = fs.readFileSync(file.path)
    return img.toString('base64')
  })

// create object to store data in the collection
let finalImg = {
  name:req.body.name,
  location:req.body.location,
  description:req.body.description,
  imagebase64:imgArray
}


let newUniversity = new University(finalImg);
console.log('checkpint2')
return newUniversity
        .save()
        .then(() => {
            console.log('checkpoint3')
            return { msg : ` Uploaded Successfully...!`}
        })
        .catch(error =>{
            if(error){
                console.log('checkpoint4')
                if(error.name === 'MongoError' && error.code === 11000){
                  
                    return Promise.reject({ error : `Duplicate . File Already exists! `});
                }
                return Promise.reject({ error : `Cannot Upload  Something Missing!`})
            }
        })


Promise.all(result)
  .then( msg => {
      res.json('Upload done');
      res.redirect('/')
  })
  .catch(err =>{
      res.json(err);
  })
})

app.post('/api/university/review/:id',store.array('images', 12),(req,res,next)=>{
  
  const files=req.files
  console.log('Strep2')
  if(!files){
    console.log('Step1')
    const error = new Error('Please choose files');
    error.httpStatusCode = 400;
    return next(error)
}
let imgArray = files.map((file) => {
  let img = fs.readFileSync(file.path)
  return img.toString('base64')
})
console.log(imgArray)
// create object to store data in the collection
let finalImg = {
  comment:req.body.comment,
  rating:req.body.rating,
  name:req.params.id,
  imagebase64:imgArray
}

let newReview = new Review(finalImg);

return newReview
        .save()
        .then(() => {
            return { msg : ` Uploaded Successfully...!`}
        })
        .catch(error =>{
            if(error){
                if(error.name === 'MongoError' && error.code === 11000){
                    return Promise.reject({ error : `Duplicate . File Already exists! `});
                }
                return Promise.reject({ error : `Cannot Upload  Something Missing!`})
            }
        })


Promise.all(result)
  .then( msg => {
          // res.json(msg);
      res.redirect('/')
  })
  .catch(err =>{
      res.json(err);
  })
})
app.post('/addUniversity',store.array('images', 12),(req,res,next)=>{
  
  const files=req.files
  console.log('Strep2')
  if(!files){
    console.log('Step1')
    const error = new Error('Please choose files');
    error.httpStatusCode = 400;
    return next(error)
}
let imgArray = files.map((file) => {
  let img = fs.readFileSync(file.path)
  return img.toString('base64')
})
console.log(imgArray)
// create object to store data in the collection
let finalImg = {
  description:req.body.description,
  location:req.body.location,
  name:req.body.name,
  imagebase64:imgArray
}

let newUniversity = new University(finalImg);

return newUniversity
        .save()
        .then(() => {
          res.redirect('/addUniversity')
            return { msg : ` Uploaded Successfully...!`}
        })
        .catch(error =>{
            if(error){
                if(error.name === 'MongoError' && error.code === 11000){
                    return Promise.reject({ error : `Duplicate . File Already exists! `});
                }
                return Promise.reject({ error : `Cannot Upload  Something Missing!`})
            }
        })


Promise.all(result)
  .then( msg => {
          // res.json(msg);
      res.redirect('/')
  })
  .catch(err =>{
      res.json(err);
  })
})
app.get(
  '/api/university/review/:id',
  asyncHandler(async (req, res) => {
    const universities = await Review.find({"name":req.params.id});
    console.log(universities)
    res.json(universities);
  })
);
app.get(
  '/universitydata/:id',
  asyncHandler(async (req, res) => {
    console.log('hello1')
    const universities = await University.find({"_id":req.params.id});
    console.log(universities)
    res.json(universities);
  })
);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
