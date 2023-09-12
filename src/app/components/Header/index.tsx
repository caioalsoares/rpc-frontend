'use client'

import styled from 'styled-components'
import Image from 'next/image'

const HeaderWrapper = styled.div`
    padding: 16px;
    background-color: #006497;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
`

const HeaderTitle = styled.span`
    font-weight: 500;
    color: white;
`

const Header = () => {
    return (
       <HeaderWrapper>
            <Image src='/rpc.png' alt='RPC logo' width={46} height={19} />
            <HeaderTitle>Grade de Programação</HeaderTitle>
       </HeaderWrapper>
    )
}

export default Header