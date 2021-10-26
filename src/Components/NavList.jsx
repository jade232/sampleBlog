import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'


function NavList() {

    const lists = [
        {
            "id": 1,
            "title": 'Technology',
            "url": "#"
        },
        {
            "id": 2,
            "title": 'Design',
            "url": "#"
        },
        {
            "id": 3,
            "title": 'Culture',
            "url": "#"
        },
        {
            "id": 4,
            "title": 'Business',
            "url": "#"
        },
        {
            "id": 5,
            "title": 'Politics',
            "url": "#"
        },
        {
            "id": 6,
            "title": 'Opinion',
            "url": "#"
        },
        {
            "id": 7,
            "title": 'Science',
            "url": "#"
        },
        {
            "id": 8,
            "title": 'Health',
            "url": "#"
        },
        {
            "id": 9,
            "title": 'Style',
            "url": "#"
        },
        {
            "id": 10,
            "title": 'Travel',
            "url": "#"
        },
        
    ]

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}} >
            {
                lists.map(list => (<List><ListItem sx={{ color: 'black'}} key={list.id}><Link sx={{ color: 'black', textDecorationColor: 'black'}} href={list.url}>{list.title}</Link></ListItem></List>))
            }
            </Box>
        </Container>
    )
}

export default NavList
