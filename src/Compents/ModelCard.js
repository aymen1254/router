import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Proudit } from './Data'

const ModelCard = ({student}) => {
    console.log(student)
    return (
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img style={{height:'150px' , width:'150px'}} variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000" />
  <Card.Body>
    <Card.Title>{student.name}</Card.Title>
    <Button variant="primary">
        <Link to={`/student/${student.id}`} >Vieu</Link>
    </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default ModelCard
