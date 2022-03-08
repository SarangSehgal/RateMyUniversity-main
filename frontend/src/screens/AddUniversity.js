import React from 'react'
import {Form,Button} from 'react-bootstrap'
function AddUniversity() {
    const submithandler=(e)=>{
        window.location.reload()
        
    }
    return (
        <div>
          <form method="post"  enctype="multipart/form-data"  >
          <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" name="name"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Location</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"  name="location"/>
            </div>
            <div class="col-8">
                <input type="file" class="form-control" name="images" id="formFile" multiple/>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
            </form>
        </div>
        
    )
}

export default AddUniversity
