import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { pages, logoObj } from './appBarConstant'


const MobileMenuItems = (props) => {
    const { handleRedirect } = props

    const [menuItemEl, setMenuItemEl] = useState(null);

    const handleOpenMenu = (event) => {
        setMenuItemEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuItemEl(null);
    };


    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenMenu}
                    color="inherit"
                >
                    <i className='bx bx-menu'></i>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={menuItemEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(menuItemEl)}
                    onClose={handleCloseMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.id}
                            onClick={() => {
                                handleRedirect(page.link)
                                handleCloseMenu()
                            }}
                        >
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Typography
                variant="h6"
                fontWeight="bold"
                fontStyle="italic"
                noWrap
                component="div"
                onClick={() => handleRedirect(logoObj.link)}
                style={{cursor: 'pointer'}}
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
                {logoObj.text}
            </Typography>
        </>
    )
}

export default MobileMenuItems
