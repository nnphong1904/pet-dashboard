import React, { useState } from 'react'
import Container from '../Container/Container.jsx'
import Header from '../Header/Header.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import ContentWrapper from '../ContentWrapper/ContentWrapper.jsx'
import User from '../User/User.jsx'
import { useSelector } from 'react-redux'
import { getCurrentAdmin } from '../Redux/selector'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
  const currentAdmin = useSelector(getCurrentAdmin)
  const [header, setHeader] = useState('Users')
  const history = useHistory()
  // if (currentAdmin === null) {
  //   history.push('/login')
  // }
  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <Header title={ header } />
        <User />
      </ContentWrapper>

    </Container>
  )
}
export default Dashboard