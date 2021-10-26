import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Blog1 from './Blogs/Blog1'
import Blog2 from './Blogs/Blog2'
import Blog3 from './Blogs/Blog3'
import Blog4 from './Blogs/Blog4'
import LastBlog from './Blogs/LastBlog'
import { Typography, Card, CardContent } from '@mui/material'


function TextGrid() {
    return (
        <Container sx={{paddingTop: 3}}>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                    <Blog1 />
                    <Blog2 />
                    <LastBlog />
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent sx={{ backgroundColor: 'lightGray'}}>
                            <Typography gutterBottom variant="h5" component="div">
                            About
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Blog3 />
                    <Blog4 />
                </Grid>
            </Grid>
        </Container> 
    )
}

export default TextGrid
