import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function Uploader() {
    const universityList = useSelector((state) => state.universityList);
  const { loading, error, universities } = universityList;
  let uni=[]
  if(universities)
  {
  uni=universities.map((university)=>{
      return(<option value={university.name}/>)
  })
}
    return (
        <div>
            <form method="post" action='/add' encType="multipart/form-data">
                <div class="mb-3">
                    <label for="exampleDataList" class="form-label">Datalist example</label>
                    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." name="name"/>
                        <datalist id="datalistOptions">
                            {uni}
                        </datalist>    
                <div/>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="title" aria-describedby="title" name="comment"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="title" aria-describedby="title" name="rating"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="col-8">
                            <input type="file" class="form-control" name="image" id="formFile" multiple/>
                </div>
                <input class="btn btn-primary" type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
        
    )
}

export default Uploader