import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react'
import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>ShopStore</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Productos</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Nosotros</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contacto</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <p>0</p>
                <BreadcrumbLink className="material-symbols-outlined" href="#">
                <CartWidget/>
                </BreadcrumbLink>
            </BreadcrumbItem>     
        </Breadcrumb>
    </div>
  )
}

export default NavBar