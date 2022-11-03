import { Box } from '@mui/system'
import React,{useState} from 'react'
import Products from '../components/Products'
import Topbar from '../components/Topbar'

function Home() {
    const [searchTerm , setSearchTerm]= useState("")
  return (
    <Box>
        <Topbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Products searchTerm={searchTerm}/>
        
    </Box>
  )
}

export default Home