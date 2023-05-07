import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

const SidebarItem = ({title, icon}) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    )
}

export default SidebarItem

//sx={{ backgroundColor: '#DBDBEB0D', borderRadius: 2 }} list Item Button;