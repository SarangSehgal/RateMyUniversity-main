import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function UniversityReview({match}) {
    const universityList = useSelector((state) => state.universityList);
    const { loading, error, universities } = universityList;
    const uni=universities.find(university=>university._id===match.params.id)
    const url='/api/university/review/'+match.params.id
    return (
        <div>
            <form method="post" action={url} enctype="multipart/form-data" >
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="rating"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="comment"></textarea>
            </div>
            <div class="col-8">
                <input type="file" class="form-control" name="images" id="formFile" multiple/>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
export default UniversityReview
