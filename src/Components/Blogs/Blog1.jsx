import React from 'react'
import { Box, Typography, Divider, Link } from '@mui/material'

function Blog1() {
    return (
        <Box>
            <Box>
                <Typography variant='h5' gutterBottom>From the firehose</Typography>
                <Divider />
                <Typography variant='h4' gutterBottom sx={{paddingTop: 2}} >Sample blog spot</Typography>
                <Typography variant='subtitle1'>April 1, 2020 by <Link href="https://mui.com/">Olivier</Link></Typography>
                <br/>
            </Box>
            <Box>
                <Typography variant='body1'>This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.</Typography>
                <br/>
                <br/>
                <Typography variant='body1'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</Typography>
                <br/>
                <br/>
                <Typography variant='body1'>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</Typography>
                <br/>
                <br/>
                <Typography variant='body1'>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</Typography>
            </Box>
        </Box>
    )
}

export default Blog1
