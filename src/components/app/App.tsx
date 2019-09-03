import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { RouterPathEnum } from '../../enums/RouterPathEnums';
import Login from '../login/Login';
import Home from '../home/home';

interface IProps {
  isLoggedIn: boolean
}

export default class App extends Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  render() {

    const isLoggedIn: boolean = this.props.isLoggedIn;

    const renderHome = (props: RouteComponentProps<any>) => {
      if (isLoggedIn) {
        return <Redirect to={RouterPathEnum.HOME} />;
      }

      return <Home {...props} />;
    }

    const renderLogin = (props: RouteComponentProps<any>) => {

      return <Login {...props} />;
    }

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path={RouterPathEnum.LOGIN}
              render={(props) => renderLogin(props)} />
            {/* {(!isLoggedIn) ? <Redirect to={RouterPathEnum.LOGIN} /> : ''}
              render={(props) => renderHome(props)} /> */}
            <Redirect to={RouterPathEnum.LOGIN} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

