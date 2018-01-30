/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
//import Link from '../../components/Link';
import s from './Home.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const title = 'React Login Form';

const style = {
  margin: 15,
  };

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
       <div>
       <MuiThemeProvider>
       <div>
       <TextField
       hintText="Enter your Username"
       floatingLabelText="Username"
       onChange = {(event, newValue) => this.setState({ username: newValue })}
       />
       <br />
       <TextField
       type="password"
       hintText="Enter your Password"
       floatingLabelText="Password"
       onChange={(event, newValue) => this.setState({ password: newValue })}
       />
       <br />
       <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
       </div>
      </Layout>
    );
  }

}

export default HomePage;
