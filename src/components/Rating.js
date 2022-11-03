import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function TextRating({value,count}) {

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'left',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 ,width: "12px"}} fontSize="12" />}
      />
      <Box sx={{ ml: 1 ,mt:0.5, fontWeight: "600"}}>({count})</Box> 
    </Box>
  );
}
