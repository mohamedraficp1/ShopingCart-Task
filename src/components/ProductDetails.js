import { Button, Grid, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import StarRateIcon from '@mui/icons-material/StarRate';

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const dispatch = useDispatch();
    const { cart } = useSelector((cart) => ({ ...cart }));

    useEffect(() => {
        const currentProduct = cart.products.find(product => product.id == id)
        setProduct(currentProduct)
    }, [id, cart.products])


    return (
        <Container >
            <Grid container spacing={2} mt={3} alignItems="center">
            <Grid item xs={6} alignItems="center">
                <img
                    src={product.image} alt={product.name} style={{ objectFit: "contain", maxHeight: "350px" }}
                />
                <Box sx={{ mt: "15px" }} >
                <Button variant="contained" color="error" sx={{mr: "10px",width: "150px"}} >Buy Now</Button>
                    {/* <Button variant="contained" color="primary" sx={{ mr: "12px" }}>Add To Cart</Button> */}
                    {cart.cart.some((p) => p.id === product.id) ? (
                            <Button
                            color="secondary"  variant="contained"
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: product,
                                    })
                                } sx={{width: "190px"}}
                            >
                                Remove from Cart
                            </Button>
                        ) : (
                            <Button 
                            color="primary"  variant="contained"
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: product,
                                    })
                                }  sx={{width: "190px"}}
                            >
                                Add to Cart
                            </Button>
                        )}
                    
                </Box>

            </Grid>
            <Grid item xs={6}>
                <Box>
                <Typography variant="h6" fontSize={"17px"} align="left" color={"error"} textTransform={"capitalize"}  fontWeight={"600"}>
                            {product.category}
                        </Typography>
                    <Typography variant="h3" fontSize={"24px"} fontWeight={"600"} align="left" mt={"3px"}>
                        {product.title}
                    </Typography>
                    
                    <Stack direction={"row"} alignItems="center" mt={"4px"}>
                        <Box width={"45px"} border={"5px"} className="star-rating" sx={{ background: "#1976d2", color: "#fff", fontSize: "14px", mr: "7px" }}>{product.rating?.rate}<StarRateIcon sx={{ width: "15px" }} /></Box>
                        <Typography variant="h5" fontSize={"18px"} align="left" mt={"8px"}>
                            {product.rating?.count} Ratings
                        </Typography>
                       
                    </Stack>
                    <Typography variant="h2" fontSize={"32px"} align="left" mt={"8px"} fontWeight={"600"}>
                          ₹ {product.price} 
                    </Typography>

                    <Typography variant="h6" fontSize={"18px"} mt={"8px"} sx={{textAlign:"left"}}>
                           {product.description} 
                    </Typography>   

                </Box>
            </Grid>
        </Grid>
        </Container>
        
    )
}

export default ProductDetails