
import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'


const Feed = () => {
  return (
    <Box p={2} flex={6} sx={{}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
 
    
    </Box>
  )
}

export default Feed