import React from "react"
import { Container, Row, Col, Navbar } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ backgroundColor: "#1eb2a6" }}
      >
        <Container>
          {/* <Row style={{height:100,backgroundColor:'red'}}> */}
          <Col className="text-center py-3" style={{ color: "#FFFFFF" }}>
            Contact no: (+92) 321-777551
          </Col>
          <Col className="text-center py-3" style={{ color: "#FFFFFF" }}>
            Copyright &copy; Digi-Learner
          </Col>
          <Col
            className="text-center py-3"
            style={{ color: "#FFFFFF", textAlign: "right" }}
          >
            Address: 6-Km Raiwand Road, Lahore
          </Col>
          {/* </Row> */}
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer
