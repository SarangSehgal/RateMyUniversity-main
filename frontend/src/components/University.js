import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { sizeHeight } from '@mui/system';
import { Row, Col } from 'react-bootstrap';

const University = ({ university }) => {
  const image=university.imagebase64[0]
  var source="data:image/jpeg;base64,"+image
  var desc=university.description.substring(0,100)
  desc=desc+'...'
  return (
    <Card
      className='rounded'
      style={{ width: '18rem' ,sizeHeight:'500'}}
    >
      <Link to={`/university/${university._id}`}>
        <Card.Img src={source} variant='top' height={'300'} width={'40'} />
      </Link>

      <Card.Body>
        <Link to={`/university/${university._id}`}>
          <Card.Title as='div'>
            <strong>{university.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={university.rating}
            text={`${university.rating} reviews`}
          />
        </Card.Text>

        <Card.Text as='h6'>{desc}</Card.Text>
      </Card.Body>
    </Card>
    // <Col>
    //   <Card>
    //     <Card.Img variant="top" src={source}/>
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a longer card with supporting text below as a natural
    //         lead-in to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Col>
    
  );
};

export default University;
