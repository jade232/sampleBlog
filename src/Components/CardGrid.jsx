import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Food from '../Assets/Food.jpg'


function CardGrid() {

    return (
        <Container sx={{ paddingTop: 5}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex'}}>
                            <Box>
                                <Typography variant='h5' component='div'>Featured Post</Typography>
                                <Typography variant='subtitle1' component='div'>Nov 12</Typography>
                                <Typography variant='h6' component='div'>This is a wider card with supporting text below as natural lead-in to additional content</Typography>
                                <Link href="#">Continue reading ...</Link>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, maxheight: 200, float: 'right'}}
                                image={Food}
                                alt="Live from space album cover"
                            />
                        </CardContent>
                    </Card> 
                </Grid>
                <Grid item md={6}>
                <Card>
                        <CardContent sx={{ display: 'flex'}}>
                            <Box>
                                <Typography variant='h5' component='div'>Featured Post</Typography>
                                <Typography variant='subtitle1' component='div'>Nov 12</Typography>
                                <Typography variant='h6' component='div'>This is a wider card with supporting text below as natural lead-in to additional content</Typography>
                                <Link href="#">Continue reading ...</Link>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, maxheight: 200, float: 'right'}}
                                image={Food}
                                alt="Live from space album cover"
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CardGrid
