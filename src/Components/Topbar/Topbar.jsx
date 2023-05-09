import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Box, IconButton, InputBase, Paper, Stack, styled, Badge } from "@mui/material"

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Topbar = () => {
    return (
        <Stack 
            flexDirection={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'} 
            sx={{ backgroundColor: '#2B2C40', borderRadius: 1, p: 0.5 }}>
            <Box 
                flexDirection={'row'} 
                alignItems={'center'} 
                justifyContent={'center'}
            >
                <Paper
                    component="form"
                    sx={{ 
                        p: '2px 4px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        width: 400, 
                        backgroundColor: 'inherit',
                        boxShadow: 'none',
                        backgroundImage: 'none'
                    }}
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="جستجو..."
                    />
                </Paper>
            </Box>
            <Stack direction="row" spacing={1} alignItems={'center'} color={'#DBDBEBAD'}>
                <IconButton type="button">
                    <GridViewIcon sx={{ cursor: 'pointer' }} />
                </IconButton>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    
                >
                    <IconButton type="button">
                        <NotificationsNoneOutlinedIcon sx={{ cursor: 'pointer' }} />
                    </IconButton>
                </StyledBadge>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <IconButton type="button">
                        <Avatar alt="Hossein Falah" src="/images/profile.jpg" />
                    </IconButton>
                </StyledBadge>
            </Stack>
        </Stack>
    )
}

export default Topbar