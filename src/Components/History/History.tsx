import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './History.scss';

/**
 * History
 * @return {JSX.Element}
 */
class History extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-g" fluid>
      <Row className="justify-content-center">
        <Col className="text-center mb-10">
          <h3 className="sectiontitle">Company History</h3>
          <dl>
            <dt className="historydate mb-2">Mar 2018</dt>
            <dd className="history mb-5">Company foundation</dd>
            <dt className="historydate mb-2">Feb 2019</dt>
            <dd
              className="history mb-5"
            >
              Contracted a blockchain project based in Singapore
            </dd>
            <dt className="historydate mb-2">Oct 2019</dt>
            <dd className="history mb-5">
              Accelerated by Seoul Fintech Lab, SBA<br/>
              Seoul Business Association
            </dd>
            <dt className="historydate mb-2">Aug 2020</dt>
            <dd
              className="history mb-5"
            >
              Accelerated by SparkLabs and Plug &amp; Play
            </dd>
            <dt className="historydate mb-2">Dec 2020</dt>
            <dd
              className="history mb-5"
            >
              Nominated as the Best Fintech Startup GITEX Supernova Challenge
              2020, Dubai
            </dd>
          </dl>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
