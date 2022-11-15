import { StarOutlined, GlobalOutlined } from '@ant-design/icons'
import { Avatar, List, Space } from 'antd'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const IconText = ({ icon, text }: { icon: React.FC, text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
const FooterLayout: React.FC = () => {
  const [results, setResults] = useState({})
  // 参数
  useEffect(() => {
    PubSub.subscribe('results', (_, data) => {
      // console.log(results)
      setResults(data)
    })
  }, [])
  const navgate = useNavigate()
  const goDetails = (fullname) => {
    navgate('/details', {
      replace: false,
      state: {
        fullname: fullname,
      },
    })
    // console.log(fullname)
  }
  // 组件值,需要的数据
  const data = results?.data?.map((item) => ({
    href: `${item.html_url}`,
    title: `${item.name}`,
    avatar: `${item.owner.avatar_url}`,
    description: `${item.description}`,
    language: `${item.language}`,
    forks_count: `${item.forks_count}`,
    fullname: `${item.full_name}`,
  }))
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 3,
      }}
      dataSource={data}
      footer={
        <div>
          <b>Koria</b> &copy
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text={item.forks_count}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={GlobalOutlined}
              text={item.language}
              key="list-vertical-language-o"
            />,
          ]}
          extra={
            <img
              width={200}
              alt="logo"
              onClick={() => {
                goDetails(item.fullname)
              }}
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }>
          {/* {console.log(item)} */}
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          <b
            onClick={() => {
              goDetails(item.fullname)
            }}>
            {item.fullname}
          </b>
        </List.Item>
      )}
    />
  )
}

export default FooterLayout
