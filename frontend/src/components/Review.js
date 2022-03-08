import React from 'react'
import { Card,Carousel } from 'react-bootstrap'

function Review({review}){
  console.log("yes")
  
  const images=review.imagebase64
  console.log(images)
  const imagelist=images.map((image)=>
  {
    var source="data:image/jpeg;base64,"+image
    return (<Carousel.Item>
      <img
        className="d-block w-100"
        src={source}
        alt="First slide"
      />
    </Carousel.Item>)
  })
  return (  
    <>
    <Card style={{ width: '50rem',margin:'5rem' }}>
    <Card.Body>
      <Card.Text>
        {review.comment}
      </Card.Text>
    </Card.Body>
    <Carousel>
  {imagelist}
</Carousel>
</Card>
</>
  )}
export default Review
