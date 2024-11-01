import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const UserTable = () => {
    var [User,SetUser]=useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
       SetUser(response.data)
       console.log(User)
    })
  return (
    <div>
        <br/>
        <br/>
      <TableContainer>
        <Table sx={{ minWidth:500}} aria-label="custom pegination table">
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {User.map((val)=>{
                return(
            <TableRow>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.address.city}</TableCell>
          </TableRow>
                )
})
        }
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default UserTable
