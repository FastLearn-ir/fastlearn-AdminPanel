import { Box, Divider, List, Typography } from "@mui/material";

import { sidebarMenu } from "../../Constants/sidebarMenu";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
        <Box component={'div'} className="min-h-screen bg-[#2B2C40] p-3">
            <Typography 
                component={'h2'}
                fontSize={22}
                fontWeight={700}
                color={'white'}
                mt={2}>
                    پنل مدیریت FastLearn
            </Typography>
            <Divider 
                variant="fullWidth" 
                sx={{mt: 2}} 
                color="white"
            />
            <List sx={{ color: '#DBDBEBAD' }}>
                {sidebarMenu.map(item => (
                    <SidebarItem key={item.id} {...item}/>
                ))}
            </List>
        </Box>
    )
}

export default Sidebar