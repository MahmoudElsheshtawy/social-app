import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import {Box, Container,Stack} from'@mui/material'
const App=() => {
  return (
 <>
    
    <Box >
    <Navbar/>
    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
    <Sidebar/>
       <Feed/>
      <Rightbar/>
    </Stack>
   

    </Box>
 
 </>
  )
}

export default App