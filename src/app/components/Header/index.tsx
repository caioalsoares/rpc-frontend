'use client'

import styled from 'styled-components'

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
            <HeaderTitle>Grade de Programação</HeaderTitle>
       </HeaderWrapper>
    )
}

export default Header