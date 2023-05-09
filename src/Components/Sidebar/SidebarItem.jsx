import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const SidebarItem = ({title, href, icon}) => {
    return (
        <ListItem disablePadding>
            <Link to={href} className="w-full">       
                <ListItemButton>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItemButton>
            </Link>
        </ListItem>
    )
}

export default SidebarItem