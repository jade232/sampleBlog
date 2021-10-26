import React from 'react'
import { Container, Box, Typography } from '@mui/material'


function Footer() {
    return (
        <Container sx={{paddingTop: 3}}>
            <Box>
                <Typography variant="h6" gutterBottom align='center'>Footer</Typography>
                <Typography variant='subtitle2' gutterBottom align='center'>Something here to give the footer a purpose!</Typography>
                <Typography variant='subtitle2' gutterBottom align='center'>Copyright © Your Website 2021.</Typography>
            </Box>
        </Container>
    )
}

export default Footer
