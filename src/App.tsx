import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';


/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container style={{backgroundImage: 'url(./images/topimage.png)'}} fluid>
      <Row>
        <Col>
          <span className="bc">BC</span>
          <span className="labs">Labs</span>
        </Col>
      </Row>
      <Row>
        <Col>
        Universal Access to Digital Asset Management<br></br>
“ for Anyone, Anytime, Anywhere ”
        </Col>
      </Row>
      <Row>
        <Col>With a team specializing in fintech,
blockchain and data analytics, we seek to harness the
cutting-edge innovations and address the growing
technology gap in the global financial industry.
        </Col>
      </Row>
    </Container>
  );
};

export default App;
