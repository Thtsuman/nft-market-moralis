import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { logoObj } from './appBarConstant'
import MobileMenuItems from './MobileMenuItems';
import WebMenuItems from './WebMenuItems';
import { useNavigate } from 'react-router-dom'
import AccountBlock from './AccountBlock';


const GenericAppBar = () => {
    const routerNavigation = useNavigate()
    const handleRedirect = (obj) => {
        routerNavigation(obj)
    }
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            fontStyle="italic"
                            noWrap
                            component="div"
                            onClick={() => handleRedirect(logoObj.link)}
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            {logoObj.text}
                        </Typography>

                        <MobileMenuItems handleRedirect={handleRedirect} />
                        <WebMenuItems handleRedirect={handleRedirect} />

                        <AccountBlock />
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default GenericAppBar
