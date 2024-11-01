import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blog = () => {
    var [User,SetUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        SetUser(response.data)
        console.log(User)
     })
  return (
    <div>
        <br/>
        <br/>
       <TableContainer>
      <Table>
        
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
           
            </TableRow>
        </TableHead>
        <TableBody>
            {User.map((val)=>{
                return(
            <TableRow>
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.title}</TableCell>
               
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

export default Blog
