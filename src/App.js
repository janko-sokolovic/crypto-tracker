import React, { Component } from 'react';
import './App.css';
import CryptoList from './components/CryptoList';
import { Layout, Menu } from 'antd';
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
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">Add crypto</Menu.Item>
              <Menu.Item key="2">Home</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', margin: '20px 0' }}>
            <CryptoList />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
