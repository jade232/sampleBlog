import React from 'react'
import {Container, Link, Typography} from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

function Blog3() {

    const Archives = [
        {
            'id': 1,
            'title': 'March 2020',
            'url': '#'
        },
        {
            'id': 2,
            'title': 'February 2020',
            'url': '#'
        },
        {
            'id': 3,
            'title': 'January 2020',
            'url': '#'
        },
        {
            'id': 4,
            'title': 'November 1999',
            'url': '#'
        },
        {
            'id': 5,
            'title': 'October 1999',
            'url': '#'
        },
        {
            'id': 6,
            'title': 'September 1999',
            'url': '#'
        },
        {
            'id': 7,
            'title': 'August 1999',
            'url': '#'
        },
        {
            'id': 8,
            'title': 'July 1999',
            'url': '#'
        },
        {
            'id': 9,
            'title': 'June 1999',
            'url': '#'
        },
        {
            'id': 10,
            'title': 'May 1999',
            'url': '#'
        },
        {
            'id': 11,
            'title': 'April 1999',
            'url': '#'
        },

    ]

    return (
        <Container>
            <Typography variant='h5' gutterBottom sx={{paddingTop: 3, marginLeft: -2}}>Archives</Typography>
            <div>
            {
                Archives.map(list => (<List><ListItem key={list.id} sx={{ padding: 0, marginLeft: 2 }} ><Link sx={{ marginLeft: -2 }} href={list.url}>{list.title}</Link></ListItem></List>))
            }
            </div>
        </Container>
    )
}

export default Blog3
