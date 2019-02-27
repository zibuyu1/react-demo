import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import index from '../index';
import PublishMode from '../publishMode';
import projectDetail from '../projectDetail';
import myProject from '../myProject';
import getQuote from '../getQuote';
import libary from '../libary';
// 列表详情
import projectListDetail from '../details/projectListDetail';

class LevelOne extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={()=> (
            <Redirect to="/PublishMode" />
          )} />
          <Route exact path="/index" component={index} />
          <Route exact path="/PublishMode" component={PublishMode} />
          <Route exact path="/projectDetail" component={projectDetail} />
          <Route path="/getQuote" component={getQuote} />
          <Route path="/myProject" component={myProject} />
          <Route path="/libary" component={libary} />
          {/* 列表详情 */}
          <Route path="/project/list/detail" component={projectListDetail} />
        </Switch>
      </div>
    );
  }
}

export default LevelOne;