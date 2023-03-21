import React, { useEffect } from "react"
import { Notification } from "@arco-design/web-react"
import LoginBoxForm from "./c-cpns/LoginBoxForm"
import style from "./style.module.less"

export default function Login() {
  // 登录提示
  useEffect(() => {
    Notification.normal({
      className: "acro-login-tip",
      title: "欢迎使用后台管理系统模板",
      content: "账号 admin(管理员) 其他(游客) 密码随意",
      closable: true,
      duration: 0
    })

    return () => {
      Notification.clear()
    }
  }, [])

  return (
    <div className={style.login}>
      <div className={style["login-box"]}>
        <div className={style["login-box-title"]}>后台管理系统</div>
        <LoginBoxForm />
      </div>
    </div>
  )
}
