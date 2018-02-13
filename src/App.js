import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import CryptoList from './containers/CryptoList';
import AddCrypto from './containers/AddCrypto';

import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
class App extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}>
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/add-crypto">Add crypto</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', margin: '20px 0' }}>
            <Switch>
              <Route path="/add-crypto" component={AddCrypto}></Route>
              <Route path="/" component={CryptoList}></Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
