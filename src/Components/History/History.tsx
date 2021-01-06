import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './History.scss';

const historyData = [
  {
    date: 'Mar 2018',
    desc: 'Company foundation',
  },
  {
    date: 'Feb 2019',
    desc: 'Contracted a blockchain project based in Singapore',
  },
  {
    date: 'Oct 2019',
    desc: 'Accelerated by Seoul Fintech Lab, SBA\n' +
          'Seoul Business Association',
  },
  {
    date: 'Aug 2020',
    desc: 'Accelerated by SparkLabs and Plug & Play',
  },
  {
    date: 'Dec 2020',
    desc: 'Nominated as the Best Fintech Startup ' +
          'GITEX Supernova Challenge 2020, Dubai',
  },
];

const classNameDt = 'historydate mb-2';

const classNameDd = 'history mb-5';

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
            {
              historyData.map((history, _index) => (
                <React.Fragment key={_index}>
                  <dt className={classNameDt}>{history.date}</dt>
                  <dd className={classNameDd}>{history.desc}</dd>
                </React.Fragment>
              ))
            }
          </dl>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
