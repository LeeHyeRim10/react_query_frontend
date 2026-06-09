import React from 'react'
import ProductTable from '../../no2_components/sales/ProductTable'
import { getCurrentUser } from '../../no3_store/hooks/useUser'
import AuthControl from '../../no2_components/layout/AuthControl';

const ProductPage = () => {

  const user = getCurrentUser();
  if(!user){
    return(
      <AuthControl message="로그인 후 상품 정보 접근 가능"/>
    )
  }

  return (
    <div>
      <ProductTable/>
    </div>
  )
}

export default ProductPage
