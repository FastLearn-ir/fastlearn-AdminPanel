import { Outlet } from "react-router-dom";
import { Sidebar } from "../Components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


const MainLayout = () => {
    return (
        <Grid2 container>
            <Grid2 xs={2}>
                <Sidebar/>
            </Grid2>
            <Grid2 xs={10}>
                asc
                <Outlet/>
            </Grid2>
        </Grid2>
    )
}

export default MainLayout