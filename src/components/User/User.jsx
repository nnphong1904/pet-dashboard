import React, { useEffect, useState } from 'react'
import firebase from '../Firebase/firebase'
import { Table, Button } from 'reactstrap';
import styled from 'styled-components'
const StyledDiv = styled.div`
  width: 65%;
  margin: 20px auto;
`
const StyledButtonContainer = styled.td`
  width: 100px;
`
const User = (props) => {
  const db = firebase.database().ref().child('Users')
  const [users, setUsers] = useState([])
  useEffect(() => {
    db.on('value', snap => {
      let i = 0;
      let usersList = []
      for (let key in snap.val()) {
        usersList[i] = { ...snap.val()[key], id: key }
        i += 1;
      }
      console.log(usersList)
      setUsers([...usersList])
    })
  }, [])

  const banUser = (userId, active) => {
    firebase.database().ref().child('Users/' + userId).update({ active: !active })
  }
  return (
    <StyledDiv>
      <Table striped >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th style={ { width: '100px' } }>Active</th>
            <th style={ { width: '150px' } }>Ban User</th>
          </tr>
        </thead>
        <tbody>
          { users.map((user, userIndex) => (
            <tr key={ userIndex }>
              <td>{ user.id }</td>
              <td>{ user.name }</td>
              <td>{ user.email !== `null` ? user.email : `N/A` }</td>
              <td>{ user.active ? `Active` : `Banned` }</td>
              <StyledButtonContainer>
                <Button onClick={ () => banUser(user.id, user.active) }>
                  { user.active ? `Ban` : `Activate` }
                </Button>
              </StyledButtonContainer>
            </tr>
          )) }
        </tbody>
      </Table>
    </StyledDiv>
  )
}
export default User;