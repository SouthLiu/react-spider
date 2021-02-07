import React, { useState } from 'react'
import { Button, Input, Row, Form, message, Spin } from 'antd'
import axios, { AxiosResponse } from 'axios';
import { IResponse } from '../../utils/types';
import style from './Top.module.css'

interface IFormValues {
  url: string;
}

function Inputs() {
  const [isLoading, setLoading] = useState(false)

  const onFinish = (values: IFormValues) => {
    const { url } = values;
    const fileName = new Date().getTime();
    setLoading(true)
    axios.post('/zip', { url, fileName }).then((response: AxiosResponse<IResponse>) => {
      if (response.data.code === 500) {
        const path = `${process.env.REACT_APP_BASE_API}/down/${fileName}`;
        window.location.href = path;
        message.error('下载成功！')
      }
    }).finally(() => {
      setLoading(false)
    }).catch(() => {
      message.error('程序错误！')
      setLoading(false)
    })
  }

  const onFinishFailed = () => {
    message.error('服务器错误')
  }

  return (
    <Spin spinning={isLoading}>
      <div className={style.box}>
        <Row justify="center" className={style.input_box}>
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

            <Form.Item name="submit" style={{ marginRight: 0 }}>
              <Button type="primary" htmlType="submit" >下载</Button>
            </Form.Item>
          </Form>
        </Row>
      </div>
    </Spin>
  )
}

export default Inputs
