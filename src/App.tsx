import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Col, Container, Navbar, NavbarBrand, Row} from 'react-bootstrap';
import logo from './images/lg_bclabs.svg';
import pantheonx from './images/img_pantheonx.png';
import volta from './images/img_volta.png';
import blockcrafters from './images/img_blockcrafters.png';
import fintechlab from './images/img_fintechlab.png';
import longhash from './images/img_longhash.png';
import plugandplay from './images/img_plugandplay.png';
import sba from './images/img_sba.png';
import sparklabs from './images/img_sparklabs.png';

/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <div>
      <Container id="section1" fluid>
        <Navbar className='logo'>
          <NavbarBrand>
            <img
              src={logo}
              alt="BCLabs"
            />
          </NavbarBrand>
        </Navbar>
        <Row className="justify-content-center">
          <Col className="mainphrase1" xs={10} sm={10} md={10} lg={10} xl={12}>
            <h1 className="title1">
              Universal Access to Digital Asset Management
            </h1>
          </Col>
          <Col className="mainphrase2">
            <h2 className="title2">
              “for Anyone, Anytime, Anywhere”
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} sm={10} md={8} lg={8} xl={6}>
            <p className="slogan">
              With a team specializing in fintech, blockchain and data
              analytics, we seek to harness the cutting-edge innovations
              and address the growing technology gap in the global
              financial industry.
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="section2" fluid>
        <Row className="justify-content-center">
          <h3 className="title3">What We Do</h3>
        </Row>
        <Row className="justify-content-center ourwork">
          <Col md lg xl={3}>
            <img src={pantheonx} className="pantheonx"/>
            <h4 className="brand">Pantheon X</h4>
            <p className="brandexplain">
              A blockchain project that seeks to realize an open
              business platform for digital asset finance.
            </p>
          </Col>
          <Col md lg xl={{span: 3, offset: 2}}>
            <img src={volta} className="volta"/>
            <h4 className="brand">VOLTA</h4>
            <p className="brandexplain">
              All-in-one digital asset management platform
              for investors and trading experts.
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="section3" fluid>
        <Row className="justify-content-center">
          <h3 className="title3">Company History</h3>
        </Row>
        <Row>
          <Col>
            <h5>Mar 2018</h5>
            <h6>Company foundation</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Feb 2019</h5>
            <h6>Contracted a blockchain project based in Singapore</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Oct 2019</h5>
            <h6>
              Accelerated by Seoul Fintech Lab, SBA<br/>
              Seoul Business Association
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Aug 2020</h5>
            <h6>Accelerated by SparkLabs and Plug & Play</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Dec 2020</h5>
            <h6>
              Nominated as the Best Fintech Startup GITEX Supernova Challenge
              2020, Dubai
            </h6>
          </Col>
        </Row>
      </Container>
      <Container id="section4" fluid>
        <Row className="justify-content-center">
          <h3 className="title3">Partners</h3>
        </Row>
        <Row className="partners1">
          <Col md lg xl={{span: 2, offset: 2}}>
            <img src={blockcrafters} className="partnersimage"/>
          </Col>
          <Col md lg xl={{span: 2, offset: 1}}>
            <img src={fintechlab} className="partnersimage"/>
          </Col>
          <Col md lg xl={{span: 2, offset: 1}}>
            <img src={longhash} className="partnersimage"/>
          </Col>
        </Row>
        <Row className="partners2">
          <Col md lg xl={{span: 2, offset: 2}}>
            <img src={plugandplay} className="partnersimage"/>
          </Col>
          <Col md lg xl={{span: 2, offset: 1}}>
            <img src={sba} className="partnersimage"/>
          </Col>
          <Col md lg xl={{span: 2, offset: 1}}>
            <img src={sparklabs} className="partnersimage"/>
          </Col>
        </Row>
      </Container>
      <Container id="section5" fluid>
        <Row>
          <h4 className="footertext">
            Copyright © 2020 bclabs Inc. All right reserved.
          </h4>
        </Row>
      </Container>
    </div>
  );
};

export default App;
