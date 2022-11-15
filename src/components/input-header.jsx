import { Input } from 'antd'
import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

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
  return (
    <div className="container">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  )
}

export default InputHeader
