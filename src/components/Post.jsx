import React from 'react'
import { Favorite, FavoriteBorder, Label, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = () => {
  return (
    <Box p={2} flex={6} sx={{}}>
    <Card >
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor:'red' }} aria-label="recipe">
        M
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="  New Nubaria City in egypt"
    subheader="September 14, 1800 K,mem"
  />
  <CardMedia
    component="img"
    height="20%"
    image="https://images.pexels.com/photos/9186421/pexels-photo-9186421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Paella dish"
    
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
   
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={
    {color:'red'}
    } />} />
    </IconButton>
    <IconButton aria-label="share">
      <Share />
    </IconButton>
  
  </CardActions>

</Card>
</Box>
  )
}

export default Post