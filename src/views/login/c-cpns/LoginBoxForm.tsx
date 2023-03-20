import React from "react"
import { Form, Input, Button } from "@arco-design/web-react"
import { IconUser, IconLock } from "@arco-design/web-react/icon"
const FormItem = Form.Item

export default function LoginBoxForm() {
  const [form] = Form.useForm()

  return (
    <div className="login-box-form">
      <Form
        form={form}
        style={{ width: 320 }}
        autoComplete="off"
        onSubmit={(v) => {
          console.log(v)
        }}
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
          <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
            登录
          </Button>
          <Button onClick={() => form.resetFields()}>重置</Button>
        </FormItem>
      </Form>
    </div>
  )
}
