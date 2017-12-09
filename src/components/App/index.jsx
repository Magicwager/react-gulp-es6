import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onCollapse=this.onCollapse.bind(this)
  }
  
  onCollapse(collapsed) {
    console.log(this);
    this.setState({ collapsed });
  }
  render(){
    return(
    <div>
      <div>
        <Layout>
          <Sider  collapsible collapsed={this.state.collapsed}  onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
            </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="user" /><span>User</span></span>}>
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
            <Layout>
              <Header>Header</Header>
              <Content>{ this.props.children }</Content>
              <Footer>Footer</Footer>
            </Layout>
        </Layout>
      </div>
    </div>
    )
  }
}
