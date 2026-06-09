import React from 'react'
import { getCurrentUser } from '../../no3_store/hooks/useUser'

const AuthControl = ({
    message = "로그인 후 이용 가능"
}) => {
    const user = getCurrentUser() ;
    const isLogin = !!user ;
    if(isLogin) return null ;

  return (
    <div>
      <div>{message}</div>
    </div>
  )
}

export default AuthControl
