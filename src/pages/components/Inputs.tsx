import React from 'react'
import { Button, Input, Row, Form, message } from 'antd'
// import axios from 'axios';

interface IFormValues {
  url: string;
}

function Inputs() {
  const onFinish = (values: IFormValues) => {
    console.log('values:', values)
  }

  const onFinishFailed = () => {
    message.error('服务器错误')
  }

  return (
    <Row justify="center">
      <Form
        name="form"
        layout="inline"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="url"
          rules={[{ required: true, message: '请输入URL' }]}
        >
          <Input addonBefore="swagger:" placeholder="请输入URL" />
        </Form.Item>

        <Form.Item name="submit" >
          <Button type="primary" htmlType="submit" >下载</Button>
        </Form.Item>
      </Form>
    </Row>
  )
}

export default Inputs
