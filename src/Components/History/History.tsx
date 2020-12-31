import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

/**
 * History
 * @return {JSX.Element}
 */
class History extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-g" fluid>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col className="text-center">
          <h3 className="title3">Company History</h3>
          <h5>Mar 2018</h5>
          <h6>Company foundation</h6>
          <h5>Feb 2019</h5>
          <h6>Contracted a blockchain project based in Singapore</h6>
          <h5>Oct 2019</h5>
          <h6>
            Accelerated by Seoul Fintech Lab, SBA<br/>
            Seoul Business Association
          </h6>
          <h5>Aug 2020</h5>
          <h6>Accelerated by SparkLabs and Plug &amp; Play</h6>
          <h5>Dec 2020</h5>
          <h6>
            Nominated as the Best Fintech Startup GITEX Supernova Challenge
            2020, Dubai
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
