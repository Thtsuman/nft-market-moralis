import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { settings } from './appBarConstant'
import Blockie from 'components/Blockie/Blockie'
import { useMoralis } from 'react-moralis'

const AccountBlock = () => {
    const { authenticate, isAuthenticated, logout } = useMoralis();
    const [accountMenuEl, setAccountMenuEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAccountMenuEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAccountMenuEl(null);
    };

    const handleLogin = () => {
        authenticate({ signingMessage: "Hello World!" })
    }

    const handleMenuItemOnClick = (menuItemObj) => {
        switch (menuItemObj.text) {
            case 'Logout':
                logout();
                break;
            default:
                break;
        }
        handleCloseMenu()
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? (
                <>
                    <Tooltip title="Open settings">
                        <IconButton
                            onClick={handleOpenMenu}
                            sx={{ p: 0 }}>
                            <Blockie currentWallet scale={3} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={accountMenuEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(accountMenuEl)}
                        onClose={handleCloseMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting}
                                onClick={() => handleMenuItemOnClick(setting)}
                            >
                                <Typography textAlign="center">{setting.text}</Typography>
                            </MenuItem>
                        ))}
                    </Menu></>
            ) : (
                <>
                    <Tooltip title="Log In">
                        <Button
                            variant="primary"
                            onClick={handleLogin}
                            sx={{ p: 0 }}
                        >
                            Login
                        </Button>
                    </Tooltip>
                </>
            )}

        </Box>
    )
}

export default AccountBlock
