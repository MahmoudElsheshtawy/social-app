import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Addd from './components/Addd'
import {Box,Stack, ThemeProvider, createTheme} from'@mui/material'
const App=() => {
  const [mode,setmode]=useState('light');

  const darkTheme =createTheme({
    palette:{
      mode:mode,
    },
  })
  return (
 <ThemeProvider theme={darkTheme}>
    
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
    <Sidebar setmode={setmode} mode={mode}/>
       <Feed/>
      <Rightbar/>
    </Stack>
   
   <Addd/>
    </Box>
 
 </ThemeProvider>
  )
}

export default App