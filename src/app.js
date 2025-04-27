import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'
import { Card, Button } from 'react-bootstrap'

export var App = () => {
  React.useEffect(() => {
    if (!document.getElementById('bootstrap-css')) {
      const link = document.createElement('link')
      link.id = 'bootstrap-css'
      link.rel = 'stylesheet'
      link.href =
        'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
      document.head.appendChild(link)
    }
  }, [])

  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
        alt='Utopia logo'
        style={{ width: 357, height: 453 }}
      />
      <button className='btn btn-primary'>Hi</button>
      <Card style={{ width: '18rem', marginTop: '20px' }}>
        <Card.Img
          variant='top'
          src='https://via.placeholder.com/150'
        />
        <Card.Body>
          <Card.Title>John Joe</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
          <Button variant='primary'>Contact</Button>
        </Card.Body>
      </Card>
    </FlexCol>
  )
}
