import React from 'react'
import Container from '@mui/material/Container'
import Hotel from '../Assets/Hotel.jpg'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core/styles'

function Banner() {

    const useStyles = makeStyles({
        imageContainer : {
            height: 450,
            width: '100%',
            backgroundImage: `url(${Hotel})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        }
    })

    const classes = useStyles()

    return (
        <Container>
            <div className={classes.imageContainer}> 
                <Typography variant="h3" component="div" sx={{ color: 'white', padding: 4}}>Title of a longer featured <br/>blog post</Typography>
                <Typography variant="h5" component="div" sx={{ color: 'white', padding: 4}}>Multiple lines of text that form the lede, informing<br/> new readers quickly and efficiently about what's <br/> most interesting in this post's contents.</Typography>
                <Link sx={{ padding: 4}} href="#">Continue reading...</Link>
            </div>
        </Container>
    )
}

export default Banner
