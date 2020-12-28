import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import top from './images/topimage.png';

/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container style={{backgroundImage: 'url(./images/topimage.png)'}} fluid>
      <Row>
        <Col className='textlogo'>
          <span className="bc"><b>BC</b></span>
          <span className="labs"><b>Labs</b></span>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={10} lg={10}>
          <div className="title">
            Universal Access to Digital
            Asset Management<br/>“ for Anyone, Anytime, Anywhere ”
            <img src={top} />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={10} lg={10}>
          <p className="slogan">With a team specializing in fintech,
            blockchain and data analytics, we seek to harness the
            cutting-edge innovations and address the growing
            technology gap in the global financial industry.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
