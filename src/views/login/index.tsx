import React from "react"
import LoginBoxForm from "./c-cpns/LoginBoxForm"
import style from "./style.module.less"

export default function Login() {
  return (
    <div className={style.login}>
      <div className={style["login-box"]}>
        <div className={style["login-box-title"]}>后台管理系统</div>
        <LoginBoxForm />
      </div>
    </div>
  )
}
