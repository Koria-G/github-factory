import React from 'react'
import FooterLayout from '@/components/footer-layout'
import InputHeader from '@/components/input-header'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.css'


const { Header, Sider } = Layout

const GeekLayout = () => {

  const navigate = useNavigate()
  const loginout = () => {
    window.localStorage.removeItem('mobile')
    navigate('/')
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">Koria_G</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={loginout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout style={{ height: 540 }}>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="1">
              首页
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
              详情页表
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <InputHeader />
          <FooterLayout />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout