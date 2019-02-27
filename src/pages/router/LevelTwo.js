import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import projectList from '../myProject/projectList';
import projectNewList from '../myProject/projectNewList';
import receiveQuoteList from '../myProject/receiveQuoteList';
import pendingPaymentList from '../myProject/pendingPaymentList';
import pendingReceiveList from '../myProject/pendingReceiveList';
import projectReceiveList from '../myProject/projectReceiveList';
import tailedPaymentList from '../myProject/tailedPaymentList';
import projectCompleteList from '../myProject/projectCompleteList';

class LevelTwo extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/myProject" render={()=> (
            <Redirect to="/myProject/projectAllList" />
          )} />
          <Route exact path="/myProject/projectAllList" component={projectList} />
          <Route exact path="/myProject/projectNewList" component={projectNewList} />
          <Route exact path="/myProject/receiveQuoteList" component={receiveQuoteList} />  
          <Route exact path="/myProject/pendingPaymentList" component={pendingPaymentList} />
          <Route exact path="/myProject/pendingReceiveList" component={pendingReceiveList} />
          <Route exact path="/myProject/projectReceiveList" component={projectReceiveList} />
          <Route exact path="/myProject/tailedPaymentList" component={tailedPaymentList} />  
          <Route exact path="/myProject/projectCompleteList" component={projectCompleteList} />
        </Switch>
      </div>
    );
  }
}

export default LevelTwo;