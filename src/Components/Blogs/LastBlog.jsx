import React from 'react'
import { Box, Typography, Link } from '@mui/material'


function LastBlog() {
    return (
        <Box>
            <Box>
                <Typography variant='h4' gutterBottom sx={{paddingTop: 5}} >Another blog spot</Typography>
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
            </Box>
        </Box>
    )
}

export default LastBlog
