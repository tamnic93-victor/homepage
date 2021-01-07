import React from 'react';
import Copyright from './Components/Copyright/Copyright';
import Do from './Components/Do/Do';
import History from './Components/History/History';
import Main from './Components/Main/Main';
// import Partners from './Components/Partners/Partners';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <React.Fragment>
      <Main/>
      <Do/>
      <History/>
      {/* <Partners/> */}
      <Copyright/>
    </React.Fragment>
  );
}

export default App;
