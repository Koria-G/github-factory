import { Card } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'

const Layoutlist: React.FC = () => {
  // 路由传参,获取path
  const location = useLocation()
  const path = location.state.fullname
  // console.log(location.state.fullname)
  const [res1, setRes1] = useState({})

  // 发送axios请求，在请求一次数据
  useEffect(() => {
    ;(async function () {
      const res = await axios.get(`https://api.github.com/repos/${path}`)
      // console.log(res)
      setRes1(res.data)
    })()
  }, [])
  // console.log(res1)
  return (
    <div className="site-card-wrapper">
      <h1>
        厂库名称:{res1.name}/{res1.visibility}
      </h1>
      <Card title="仓库时间列表" bordered={true}>
        创建时间:{dayjs(res1.created_at).format('YYYY-MM-DD HH:mm:ss')}
        <br />
        更新时间:{dayjs(res1.updated_at).format('YYYY-MM-DD HH:mm:ss')}
        <br />
        推送时间:{dayjs(res1.pushed_at).format('YYYY-MM-DD HH:mm:ss')}
        <br />
      </Card>

      <Card title="仓库地址" bordered={false}>
        git_url：{res1.git_url}
        <br />
        ssh_url：{res1.ssh_url}
        <br />
        clone_url：{res1.clone_url}
        <br />
        svn_url：{res1.svn_url}
        <br />
      </Card>
    </div>
  )
}

export default Layoutlist
