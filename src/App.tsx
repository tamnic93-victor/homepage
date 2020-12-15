import React from 'react';
import './App.scss';


/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <div className="contents">
      <h1>
        <span className="bc"> BC</span>&nbsp;
        <span className="labs">LABS</span>
      </h1>
      <h2>
        A universal access to digital asset management<br />
        for anyone, anytime, and anywhere.
      </h2>
    </div>
  );
};

export default App;
