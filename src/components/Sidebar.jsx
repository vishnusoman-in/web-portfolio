import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {Box,Typography,useMediaQuery,Divider,LinearProgress,Button} from "@mui/material";

import {CheckCircleOutline} from '@mui/icons-material';

//import desk from 'assets/portfolio_desktop.jpg'
import mypic from "assets/mypic.png"
//import zIndex from "@mui/material/styles/zIndex";

import {KeyboardDoubleArrowDown} from '@mui/icons-material';

const Sidebar = () => { 

   const isDesktop = useMediaQuery("(min-width: 1000px)");
   const navigate = useNavigate();
   // onClick={() => {navigate("/");}}

   //Box 1 - width="200px" height="785px"
   //Box 2 - width="150px" height="750px"

   //<Box sx={{position:"absolute", zIndex:"12", backgroundColor:"rgb(100,250,100)",left:"100px", top:"700px", }}>
//<KeyboardDoubleArrowDown></KeyboardDoubleArrowDown>
//</Box>
    
    return (

        <Box width="200px" height="auto" overflow="scroll"   backgroundColor="#cfcfcf" sx={{ boxShadow:5,borderRadius:"0.8rem"}}  marginLeft="0.8rem" marginRight="0.8rem" style={{position:"relative", zIndex:"10",}}>

<Box width="75%" height="98%" backgroundColor="#cfcfcf" marginLeft="0.9rem" marginTop="1rem" borderRadius="0.5rem">

<Box  sx={{position:"absolute", zIndex:"11", backgroundColor:"rgb(100,250,100)", left:"120px", top:"90px", border:1, borderColor:"black" }} borderRadius="50%" width="12px" height="12px" >

</Box >



 <Box width="100px" height="100px" marginTop="1rem" backgroundColor="whitesmoke"  sx={{ borderRadius:"50%",marginLeft:"1.5rem", }} >
 <img src={mypic}
 width="100px"
 height="100px"
 
style={{border:"2px",borderRadius: "50%",borderColor:"white"}}
 />
</Box>   



<Typography color="black" variant="h6" fontFamily="sans-serif" textAlign="center">Vishnu Soman</Typography>
<Typography color="black" fontSize="10px" fontFamily="sans-serif" textAlign="center">Full Stack Developer</Typography>

<Divider color="black" sx={{marginTop:"0.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Box display="flex" justifyContent="space-between">
<Typography>Age:</Typography>
<Typography fontSize="15px" >28</Typography>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Location:</Typography>
<Typography fontSize="15px" >Kerala</Typography>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Looking for Job:</Typography>
<CheckCircleOutline fontSize="40px" sx={{color:"green", marginTop:"4px"}} ></CheckCircleOutline>
</Box>

<Divider color="black" sx={{marginTop:"0.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >Languages</Typography>

<Box display="flex" justifyContent="space-between">
<Typography>Malayalam</Typography>
<Typography>100%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="100%" height="4px" backgroundColor="black">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>English</Typography>
<Typography>90%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="90%" height="4px" backgroundColor="black">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Hindi</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="black">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Tamil</Typography>
<Typography>50%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="50%" height="4px" backgroundColor="black">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >Coding Skills</Typography>

<Box display="flex" justifyContent="space-between">
<Typography>HTML</Typography>
<Typography>80%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="80%" height="4px" backgroundColor="black">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>CSS</Typography>
<Typography>82%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="82%" height="4px" backgroundColor="black">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>JS</Typography>
<Typography>75%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="75%" height="4px" backgroundColor="black">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>C/C++</Typography>
<Typography>74%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="74%" height="4px" backgroundColor="black">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Python</Typography>
<Typography>50%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="50%" height="4px" backgroundColor="black">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"1rem", height:"1px"}}  ></Divider>

<Button sx={{color:"white", backgroundColor:"black", width:"150px", height:"20px", }}>more skills</Button>

<Divider color="black" sx={{marginTop:"1rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Button sx={{color:"white", backgroundColor:"black", width:"150px", height:"20px"}}>Download CV</Button>

</Box>


</Box>


        )};

export default Sidebar;