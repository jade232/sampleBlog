import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'

function Blog4() {

    const Social = [
        {
            'id': 1,
            'title': 'GitHub',
            'url': '#',
            'icon': <GitHubIcon color="primary" />
        },
        {
            'id': 2,
            'title': 'Twitter',
            'url': '#',
            'icon': <TwitterIcon color="primary" />
        },
        {
            'id': 1,
            'title': 'Facebook',
            'url': '#',
            'icon': <FacebookIcon color="primary" />
        },
    ]


    return (
        <Container>
            <Typography variant='h5' gutterBottom sx={{paddingTop: 3, marginLeft: -2}}>Social</Typography>
            <Box>
            {
                Social.map(list => (<List>
                    <ListItem key={list.id} sx={{ padding: 0, marginLeft: 0 }}>
                        {list.icon}
                        <Link sx={{ color: 'primary', textDecorationColor: 'primary'}} href={list.url}>
                        {list.title}
                        </Link>
                    </ListItem>
                </List>))
            }
            </Box>
        </Container>
    )
}

export default Blog4
