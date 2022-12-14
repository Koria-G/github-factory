import { Form, Input, Button, Checkbox, Card, message } from 'antd'
import { useStore } from '@/store'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.png'
import './index.css'

const Login = () => {
  // 获取跳转实例对象
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = values => {
    const { mobile, code } = values
    if (mobile === '15760217648' && code === '123456') {
      // 把数据存储到localStorage
      window.localStorage.setItem('mobile', mobile)
      window.localStorage.setItem('code', code)
      navigate('/layout')
    }
    else { message.error('登录失败') }
    console.log(values)
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          validateTrigger={['onBlur', "onChange"]}
          onFinish={onFinish}
        >
          <Form.Item
            name={"mobile"}
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur'
              },
              {
                required: true,
                message: '请输入手机号'
              }
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { len: 6, message: '密码6个字符', validateTrigger: 'onBlur' },
              { required: true, message: '请输入密码' }
            ]}>
            <Input size="large" placeholder="请输入密码" maxLength={6} />
          </Form.Item>
          <Form.Item name="remember" valuePropName='checked'>
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login