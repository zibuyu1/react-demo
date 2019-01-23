import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addToCart , updateCart, deleteFromCart } from './redux/action/cart-actions';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';
import { Layout, Button, Menu, Icon } from 'antd';
import api from './api/index';
import PublishMode from './pages/publishMode';
import myProject from './pages/myProject';
import index from './pages/index';
const {
  Header, Footer, Content,
} = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  state = {
    current: 'mail',
    userInfo: {},
    shoppingCartArr: [],
  }
  
  getLogoInfo() {
    api.loginInfo().then(res => {
      if (res) {
        if (res.data) {
          const obj = res.data;
          obj.userName = obj.userName.length > 10 ? obj.userName.substring(0,10)+'...' : obj.userName;
          this.setState({
            userInfo: obj,
          });
        }
      }
    })
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  componentWillMount() {
    // this.getLogoInfo();
    this.props.addToCart('Flour 1kg', 2, 110);
    this.props.addToCart('Flour 1kg', 2, 110);
    this.props.addToCart('Coffee 500gm', 1, 250);
    this.props.addToCart('Flour 1kg', 2, 110);
    this.props.addToCart('Juice 2L', 1, 250);
    this.props.deleteFromCart('Coffee 500gm');
    this.setState({
      shoppingCartArr: this.props.shoppingCart.cart,
    });
  }

  render() {
    const shoppingCart = this.props.shoppingCart;
    return (
      <Router>
        <Layout>
          <Header>
            <ul className="header_ul clearfix">
              <li className="fl">
                <ul className="clearfix">
                  <li className="header__li_logo">
                    <Link to="/">
                      <div className="photo"></div>
                    </Link>
                  </li>
                  <li className="header__li_title">
                    {
                      shoppingCart.cart.map((item, index) => <span key={index}>{item.product},</span>)
                    }
                    我的项目
                  </li>
                </ul>
              </li>
              <li className="fr">
                <ul>
                  <li className="header__li_btn">
                    <Button type="danger">Danger</Button>
                  </li>
                  <li className="header__li_user">
                    <Menu
                      onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="horizontal">
                      <SubMenu 
                        title={<span className="submenu-title-wrapper"><Icon type="user" /><i>{this.state.userInfo.userName}</i><Icon type="caret-down" /></span>}>
                        <Menu.Item key="setting:1">
                          <Link to="/myProject">我的项目</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                          <Link to="/PublishMode">账户管理</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:3">
                          <Link to="/PublishMode">零件库</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:4">
                        <Link to="/PublishMode">退出</Link>
                        </Menu.Item>
                      </SubMenu>
                    </Menu>
                  </li>
                </ul>
              </li>
            </ul>
          </Header>
          <Content>
            <Route path="/" exact render={()=> (
              <Redirect to="/index" />
            )} />
            <Route path="/index" component={index} />
            <Route path="/PublishMode" component={PublishMode} />
            <Route path="/myProject" component={myProject} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    shoppingCart: state.shoppingCart,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...bindActionCreators({ addToCart, updateCart, deleteFromCart }, dispatch)
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
