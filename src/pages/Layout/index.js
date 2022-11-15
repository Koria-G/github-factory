
import { Button, Input } from 'antd'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import './index.css'

const { Search } = Input

const Layout: React.FC = () => {
  const [results, setResults] = useState([])
  const onSearch = async (value) => {
    const res = await axios.get(`https://api.github.com/users/${value}/repos`)
    console.log(res)
    // results = res
    // console.log(results, 'jj')
    setResults(res)
  }
  return (
    <div className='container'>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      {results?.data?.map((item) => {
        return (<h1>{item.name}</h1>)
      })}
    </div>
  )
}


export default Layout