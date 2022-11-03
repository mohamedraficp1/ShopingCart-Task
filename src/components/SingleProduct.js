import React from 'react'
import { Box, Typography } from '@mui/material';
import TextRating from './Rating';


function SingleProduct({ prod }) {
    return (
        <Box className="products">
            <img
  src={prod.image} alt={prod.name} width="300" height="250" style={{objectFit: "contain"}}
/>
<Typography variant="h5" fontSize={"15px"} color="error" fontWeight={600} align="left" textTransform={"capitalize"}>  {prod.category}</Typography> 
<Typography variant="h5" fontSize={"18px"} color="#4D4F5C" fontWeight={500} align="left"> {prod.title}</Typography>
<Typography variant="h5" fontSize={"24px"} color="#4D4F5C" fontWeight={600} align="left"> ₹ {prod.price}</Typography> 
<TextRating value={prod.rating.rate} count ={prod.rating.count}/>            
       
    </Box>
    )
}

export default SingleProduct