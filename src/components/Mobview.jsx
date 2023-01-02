import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {Box,Typography,useMediaQuery,Divider,LinearProgress,Button} from "@mui/material";

import {CheckCircleOutline} from '@mui/icons-material';

//import desk from 'assets/portfolio_desktop.jpg'
import mypic from "assets/mypic.png"
//import zIndex from "@mui/material/styles/zIndex";

import {KeyboardDoubleArrowDown} from '@mui/icons-material';

import mob from 'assets/mob.jpg'
import Sidebar from 'components/Sidebar.jsx'

const Mobview = () => { 

   const isDesktop = useMediaQuery("(min-width: 1000px)");
   const navigate = useNavigate();

   return(

    

    <Box width="100vw" height="100vh" style={{position:"relative", zIndex:"300",}}>

  
{/*
backgroundImage: `url(${mob})`, backgroundSize: "99.5%",
   */}
<Box width="100vw" height="100vh" style={{position:"absolute", zIndex:"301", backgroundColor:"red",}}>
<img src={mob}
width="100%" 
height="100%"
/>
</Box>

<Box  style={{position:"absolute", zIndex:"302",top:"30%", left:"30", backgroundColor:"red",transform:"rotate(-5deg)"}}>
<Typography>What is it man</Typography>
</Box>


</Box>



   )};

   export default Mobview;