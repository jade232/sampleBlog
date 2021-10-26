import React from 'react'
import { Box, Typography } from '@mui/material'

function Blog2() {
    return (
        <Box>
            <Typography variant='h5' gutterBottom sx={{paddingTop: 3}}>Heading</Typography>
            <br/>
            <Typography variant='body'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Typography>
            <br/>
            <Typography variant='h6' gutterBottom sx={{paddingTop: 3}}>Sub Heading</Typography>
            <br/>
            <Typography variant='body'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Typography>
        </Box>
    )
}

export default Blog2
