import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUniversityDetails } from '../actions/universityActions';
import Uploader from '../components/Uploader';
import UniversityReview from '../components/UniversityReview';
import ReviewList from '../components/ReviewList';
import axios from 'axios'


const UniversityScreen = ({ match }) => {
  console.log(match.params.id)
  // const dispatch = useDispatch();
  // const universityDetails = useSelector((state) => state.universityDetails);
  // const { loading, error, university } = universityDetails;
  // const university={'name':'acb','description':"happy addad",'imagebase64':'aa'}
  // console.log(university)
  const[university,setUniversity]=useState('')
  
  var source=''
  useEffect(() => {
    const fetchProduct = async () => {
      console.log()
      const {data} = await axios.get(`/universitydata/${match.params.id}`);
      setUniversity(data)
      console.log(university)
      var image=university.imagebase64
      source="data:image/jpeg;base64,"+image
    }

    fetchProduct();
    // dispatch(listUniversityDetails(match.params.id));
  }, [match]);
  return (
    <>
  <Link className='btn btn-light my-3' to='/'>
        Go Back
  </Link>
  <h3>{university.name}</h3>
    <Row>
          <h3>{university.name}</h3>
          <Col md={6}>
            <Image  src={source} alt={university.name} fluid />
            
          </Col>
          <Col md={6}>
          <h5>{university.description}</h5>
                
              
            {/* <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{university.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={university.rating}
                  text={`${university.numReviews} reviews`}
                />
              </ListGroup.Item>
              
            </ListGroup> */}
          </Col>
        </Row>
      
    <UniversityReview match={match}/>
    <ReviewList match={match}/>
    </>
  );
};

export default UniversityScreen;
