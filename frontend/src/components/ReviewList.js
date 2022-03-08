import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
function ReviewList({match}) {
    const universityList = useSelector((state) => state.universityList);
    const { loading, error, universities } = universityList;
    const [review, setReview] = useState([]);
    
    useEffect(() => {
    const fetchProduct = async () => {
       
      const { data } = await axios.get(`/api/university/review/${match.params.id}`);
        setReview(data);
    };

    fetchProduct();
  }, [match]);
  console.log(review)
  const a=review.map((reviewitem)=>{
      return <Review review={reviewitem}/>
  })
    return (
        <div>
           {a}
        </div>
    )
}

export default ReviewList
