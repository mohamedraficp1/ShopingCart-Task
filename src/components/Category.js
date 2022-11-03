import React from 'react'
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Category() {
    const {cart}= useSelector((cart) => ({ ...cart }));
    let categories=[]
    let productsArray=cart.products
    for(let i=0;i< productsArray.length;i++) {
        if(categories.indexOf(productsArray[i].category)==-1) {
            categories.push(productsArray[i].category)
        }
    }
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, color: "#fff" }} size="small">
      <InputLabel id="demo-select-small">Categories</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Categories"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {categories.map((category)=>(
            <MenuItem value={category}>{category}</MenuItem>
        ))}
        
        
      </Select>
    </FormControl>
  );
}

export default Category