import { Card, Spin } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string;
  name: string;
  size: number;
  type: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
]

const Layoutlist: React.FC = () => {
  // 路由传参,获取path
  const location = useLocation()
  const path = location.state.fullname
  // console.log(location.state.fullname)
  const [res1, setRes1] = useState({})
  const [res2, setRes2] = useState([])
  const [show, setShow] = useState(true)

  // 发送axios请求，在请求一次数据获取时间
  useEffect(() => {
    ;(async function () {
      const res = await axios.get(`https://api.github.com/repos/${path}`)
      console.log(res)
      setShow(!show)
      setRes1(res.data)
    })()
  }, [])

  // 发送axios请求，在请求一次数据,获取list数据
  useEffect(() => {
    ;(async function () {
      const res = await axios.get(
        `https://api.github.com/repos/${path}/contents`
      )
      console.log(res)
      setShow(!show)
      setRes2(res.data)
    })()
  }, [])

  // 获取数据
  const data: DataType[] = res2.map((item, index) => {
    return {
      key: index,
      name: item.name,
      size: item.size,
      type: item.type,
    }
  })

  return (
    <div className="site-card-wrapper">
      {show && <Spin />}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <h1 style={{ fontSize: 24, paddingLeft: 240 }}>
          仓库名称: {res1.name}/{res1.visibility}
        </h1>
        <Card title="仓库时间列表" bordered={true}>
          创建时间:{dayjs(res1.created_at).format('YYYY-MM-DD HH:mm:ss')}
          <br />
          更新时间:{dayjs(res1.updated_at).format('YYYY-MM-DD HH:mm:ss')}
          <br />
          推送时间:{dayjs(res1.pushed_at).format('YYYY-MM-DD HH:mm:ss')}
          <br />
        </Card>
      </div>

      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Layoutlist
