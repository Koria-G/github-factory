import { Input } from 'antd'
import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import styled from 'styled-components'

const { Search } = Input

const InputHeader: React.FC = () => {
  const [results, setResults] = useState([])
  const onSearch = async (value) => {
    const res = await axios.get(`https://api.github.com/users/${value}/repos`)
    // console.log(res)
    setResults(res)
  }
  // 发送数据
  PubSub.publish('results', results)

  // 利用styled-components创建一个title组件
  const Title = styled.h1`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
  `
  return (
    <div className="container">
      <Title>仓库查询-依据user</Title>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: '600px' }}
      />
    </div>
  )
}

export default InputHeader
