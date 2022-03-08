import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import University from '../components/University';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUniversity } from '../actions/universityActions';
import Uploader from '../components/Uploader';
import FindUniversity from '../components/FindUniversity';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
const HomeScreen = () => {
  const dispatch = useDispatch();

  const universityList = useSelector((state) => state.universityList);
  const { loading, error, universities } = universityList;
  

  useEffect(() => {
    dispatch(listUniversity());
  }, [dispatch]);

  return (
    <>
    
    <FindUniversity/>
    <Link to='/addUniversity'>
      Add University
    </Link>
    {/* <h1>Top Rated Universities</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        
        <Row>
          
          {universities.map((uni) => (
            <Col key={uni._id} sm={12} md={6} lg={4} xl={3}>
              <University university={uni} />
            </Col>
          ))}
          
        </Row>
      )} */}
      <Row xs={1} md={2} className="g-4">
      {universities.map((uni) => (
        <University university={uni} />
  ))}
</Row>
    </>
  );
};

export default HomeScreen;
