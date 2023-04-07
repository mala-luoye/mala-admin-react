import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { cache } from "@/utils"

/**
 * token是否有效，无效则跳转登录页
 */
const useTokenStatus = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!cache.getCache("token")) {
      navigate("/login")
    }
  }, [])
}

export default useTokenStatus
