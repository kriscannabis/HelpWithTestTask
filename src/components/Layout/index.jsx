import React from "react";
import styled from "styled-components";
// import s from './Layout.module.css';

const Container = styled.div`
  display: flex;
`

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const Content = styled.div`

`

const links = [
  {name: "Home", link:''},
  {name: "Messages", link:''},
  {name: "Profile", link:''},
  {name: "Settings", link:''},
  {name: "Resources", link:''}
]

const Layout = ({children})=>{
  return(
  <Container>    
    <AsideContainer>
      {links.map((link, key)=>
        <div key={key}>{link.name}</div>
      )}
    </AsideContainer>
    <Content>
      
      {children}
    </Content>
  </Container>
  )
}

export default Layout