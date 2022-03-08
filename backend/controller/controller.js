import Review from '../models/ReviewModel'
const fs=require('fs')
exports.home=async(req,res)=>{
    let all_images=await Review.find()
    all_images=all_images.filter((file)=>file.filename==='4.jpg')
    res.render('main',{images:all_images})
}
exports.uploads=(req,res,next)=>{
    const files=req.files
    if(!files){
        const error=new Error('Please choose files')
        error.httpStatusCode=400
        return next(error)
    }
    //convert images to base64 encoding
    let imgArray=files.map((file)=>{
        let img=fs.readFileSync(file.path)
        return encode_image=img.toString('base64')
    })
    let result=imgArray.map((src,index)=>{
        let finalimg={
            name:files[index].originalname,
            imageBase64:src

        }
    
    let newUpload=new Review(finalimg)
    return newUpload
        .save()
        .then(()=>{
            return{msg:`${files[index].originalname} uploaded`}
        }).catch(error=>{
            if(error){
                if(error.name==='MOngoError'&& error.code===11000)
                    return Promise.reject({error:'Duplicate'})
                return Promise.reject({error:'something went'})
            }
        })
    
})
Promise.all(result)
.then(msg=>{
    res.redirect('/')
})
}
