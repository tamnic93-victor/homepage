import React from 'react';
import './App.scss';


/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <div>
      <section className="section1">
        <div className="textlogo">
          <span className="bc">BC</span>
          <span className="labs">Labs</span>
        </div>
        <div className="maintitle">
          <span className="slogan1">Universal Access to
          Digital Asset Management</span><br></br>
          <span className="slogan2">“ for Anyone, Anytime, Anywhere ”</span>
        </div>
        <div className="subtitle">
          <span className="whatwedo">
          With a team specializing in fintech, blockchain
          and data analytics, we seek to harness the cutting-edge
          innovations and address the growing
          technology gap in the global financial industry.
          </span>
        </div>
      </section>
    </div>
  );
};

export default App;
