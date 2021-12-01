import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { pages } from './appBarConstant'

const WebMenuItems = (props) => {
    const { handleRedirect } = props
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    key={page.id}
                    onClick={() => handleRedirect(page.link)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page.name}
                </Button>
            ))}
        </Box>
    )
}

export default WebMenuItems
