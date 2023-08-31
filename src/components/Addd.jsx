
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const SytledModal =styled(Modal)({

display:'flex',
justifyContent:'center',
alignItems:'center'

})
const UserBox =styled(Box)({

    display:'flex',
    gap:'10px',
    justifyContent:'flex-start',
     alignItems:'center',
     marginBottom:'10px'
    
    
    })


const Addd =()=> {
    const [open,setopen ]=useState(false)
    return (
        <>
            <Tooltip onClick={()=>setopen(!open)} title="Add" sx={{position:'fixed', bottom:20 , left:{xs:'calc(50% - 25px)',md:20}}}>
            <Fab size="medium" color="primary" aria-label="add">
                <Add/>
            </Fab>
            </Tooltip>
          <SytledModal
            open={open}
            onClose={()=>setopen(!open)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} bgcolor={"background.default"} color={"text.primary"} height={280 } p={2} borderRadius={5}  >
              <Typography color={'#aaa'} textAlign={'center'}>
                  Create Post
               </Typography>
               <UserBox>
                  <Avatar src='https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/367450826_1309908882967849_2938460895059065065_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=668d3b&_nc_ohc=753FvpG_zDMAX9AnBcp&_nc_ht=scontent.fcai19-5.fna&oh=00_AfCLkk7at8plrPnSYgxLS8eq4ODUvwBfvZV6X1F_yGPArA&oe=64F655CD' sx={{width:30, height:30}}/>
                      <Typography fontWeight={500} variant='span'>
                         elshaehtawy
                      </Typography>
                 
               </UserBox>
               <TextField sx={{width :'100%'}}
          id="standard-multiline-static"
        //   label="Multiline"
          multiline
          rows={3}
          
          placeholder="What's are you thinking ?"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={2} >
        <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
            </Box>
            </SytledModal>
         
        
        </>
    )
}

export default Addd