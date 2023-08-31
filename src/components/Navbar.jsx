import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import DeblurIcon from '@mui/icons-material/Deblur';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar =styled(Toolbar)({
     display:'flex',
     justifyContent:'space-between'
})

const Searsh =styled('div')(({theme})=>({
    backgroundColor:'white',
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
     width:'400px'
}))
const Icons =styled(Box)(({theme})=>({
   display:'none',
   alignItems:'center',
   gap:'20px',
   [theme.breakpoints.up("sm")]:{
    display:'flex'
   }

}))
const UserBox =styled(Box)(({theme})=>({
  display:'none',
   alignItems:'center',
   gap:'5px',
   [theme.breakpoints.down('sm')]:{
    display:'flex'
   }

}))
const Navbar = () => {
  const [open,setopen]=useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            
            <DeblurIcon sx={{fontSize:'35px'}}/>
            <Searsh><InputBase placeholder='Search...'/></Searsh>
            <Icons>
            <Badge badgeContent={4} color="error">
             <MailIcon/>
           </Badge>
           <Badge badgeContent={4} color="error" >
             <NotificationsIcon/>
         </Badge>
           <Avatar onClick={()=>setopen(!open)} sx={{width:'35px', height:'35px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Icons>
            <UserBox onClick={()=>setopen(!open)}>
           <Avatar sx={{width:'35px', height:'35px',marginLeft:'20px' }}alt="Remy Sharp" src="/static/images/avatar/1.jpg"      />
               <Typography variant='span'>mahmoud</Typography>
            </UserBox>
            
            
          
             
        </StyledToolbar>
        <Menu 
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setopen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        
       
        
        
        </AppBar>
  )
}

export default Navbar