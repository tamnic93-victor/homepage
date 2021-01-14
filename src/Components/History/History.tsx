import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './History.scss';


/**
 * History
 * @return {JSX.Element}
 */
class History extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-history" fluid>
      <Row className="vh-history justify-content-center align-items-center">
        <Col xs={10} sm={10} md={8} lg={6} xl={7} className="history">
          <h3
            className="section-title mb-0"
            style={{color: 'white'}}
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offset='-100'>
            Our meaningful <span className="section-bold">footsteps</span>
          </h3>
          <dl className="history-list">
            <hr className="history-div mt-5"/>
            <dt
              className="history-date-start"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Mar 2018
            </dt>
            <dd
              className='history clearfix'
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Company foundation
            </dd>
            <hr className="history-div"/>
            <dt
              className="history-date"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Feb 2019
            </dt>
            <dd
              className='history clearfix'
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Contracted a blockchain project based in Singapore
            </dd>
            <dt
              className="history-date"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Oct 2019
            </dt>
            <dd
              className='history clearfix'
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Accelerated by Seoul Fintech Lab, SBA, Seoul Business Association
            </dd>
            <hr className="history-div"/>
            <dt
              className="history-date"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Aug 2020
            </dt>
            <dd
              className='history clearfix'
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Accelerated by SparkLabs and Plug and Play
            </dd>
            <dt
              className="history-date"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Dec 2020
            </dt>
            <dd
              className='history clearfix'
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-offset='-300'>
              Nominated as the Best Fintech Startup, GITEX Supernova Challenge
              2020, Dubai
            </dd>
            <hr className="history-div"/>
          </dl>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
