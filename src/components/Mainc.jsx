import React from 'react'
import { Col, Row ,Container} from 'react-bootstrap';


function Mainc() {
        let myname="eman";
        let mystudents=["eman","ahmed","mohamed","ali"];
  return (
    <div>
            <label htmlFor="username"></label>
            <input type="text" id="username" />
            <nav className="navbar">welcome in navbar</nav>
            <header style={{backgroundColor:"red",color:"white"}}>welcome in header</header>
            <h2>hello {myname}</h2>
            <ul>
            {mystudents.map((student)=><li>{student}</li>)}
            </ul>
            <Container fluid>
                <Row>
                    <Col md={5}>1 of 3</Col>
                    <Col md={5}>1 of 3</Col>
                    <Col md={5}>1 of 3</Col>
                </Row>

            </Container>
    </div>
  )
}

export default Mainc