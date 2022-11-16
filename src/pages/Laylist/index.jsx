import React from 'react'
import Layoutlist from '@/components/layout-list'
import './index.css'

import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.css'
import { Link } from 'react-router-dom'

const { Header, Sider } = Layout

const Laylist = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">Koria_G</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
              <Link to="/details">详情页表</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Layoutlist />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Laylist
