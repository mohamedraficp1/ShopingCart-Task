import React, { useState, useEffect,useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { Box, Container, Pagination } from '@mui/material';
import SingleProduct from './SingleProduct';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


function Products({searchTerm}) {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage]= useState(1)
    const[postPerPage,setPostPerPage]= useState(6)
    const [seachProducts, setSearchProducts] = useState([])
    const dispatch = useDispatch();
    const handleSubmit=(e,p)=>{
        setCurrentPage(p)
    }
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios(`https://fakestoreapi.com/products/`);
                setProducts(res.data);
                localStorage.setItem('products', JSON.stringify(res.data));
                // localStorage.setItem("cart", JSON.stringify(res.data));
                dispatch({ type: "INITAL", payload: res.data })
            } catch (err) {
                console.log(err);
            }
        };
        getAllProducts();
        // eslint-disable-next-line
    }, []);
    useMemo(() => {
        if(searchTerm !== ""){
            const newSearchProducts = products.filter((product)=>{
                return Object.values(product).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
            }) 
            setSearchProducts(newSearchProducts)
            console.log(seachProducts)
            // setSearchProducts(newSearchProducts)
            }
    }, 
    [searchTerm])
    
        // else {
        //     setSearchProducts(products)
        // }

    const indexOfLastPost= currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const currentProducts = searchTerm.length > 1 ? seachProducts : products.slice(indexOfFirstPost,indexOfLastPost)
    console.log(products)
    const pages = searchTerm.length > 1 ? seachProducts : products
    const pageCount  = Math.ceil(pages.length /postPerPage)
    const { cart } = useSelector((cart) => ({ ...cart }));
    console.log(cart)
    return (
        <Container fixed >
            <Box className="products_home" sx={{ flexGrow: 1 ,mt: "18px"}}>
                <Grid container spacing={3}>
                    {currentProducts.map((prod) => (
                        <Grid item xs={4} mb={"22px"}>
                             <Link href={`/product/${prod.id}`} underline="none"><SingleProduct prod={prod} key={prod.id} /></Link>
                        </Grid>

                    ))}

                </Grid>
                <Pagination count={pageCount} color="primary" onChange={handleSubmit}/>
            </Box>
        </Container>
    )
}

export default Products