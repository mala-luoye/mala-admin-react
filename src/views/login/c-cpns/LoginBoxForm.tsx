import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, Message } from "@arco-design/web-react"
import { IconUser, IconLock } from "@arco-design/web-react/icon"
import { cache } from "@/utils"
const FormItem = Form.Item

export default function LoginBoxForm() {
  const navigate = useNavigate()
  // 登录loading动画
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  // 提交表单
  const handleSubmit = (data: any) => {
    // loading动画开启
    setLoading(true)
    // 权限判断
    switch (data.username) {
      case "admin":
        cache.setCache("token", { username: data.username, auth: 1 })
        break
      default:
        cache.setCache("token", { username: data.username, auth: 2 })
    }
    // 跳转页面
    setTimeout(() => {
      Message.success("登陆成功")
      navigate("/home")
    }, 2000)
  }

  return (
    <div className="login-box-form">
      <Form
        form={form}
        style={{ width: 320 }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormItem field="username" rules={[{ required: true }]}>
          <Input
            placeholder="用户名"
            prefix={<IconUser />}
            style={{ width: 320 }}
          />
        </FormItem>
        <FormItem field="password" rules={[{ required: true }]}>
          <Input.Password
            placeholder="密码"
            prefix={<IconLock />}
            style={{ width: 320 }}
          />
        </FormItem>
        <FormItem style={{ marginTop: 15 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: 80, marginRight: 24 }}
            loading={loading}
          >
            登录
          </Button>
          <Button style={{ width: 80 }} onClick={() => form.resetFields()}>
            重置
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}
