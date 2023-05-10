import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { Loading, Sidebar, Topbar } from "../Components";

const MainLayout = () => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <Sidebar/>
            </Grid>
            <Grid item xs={10} sx={{ backgroundColor: '#232333', p: 2 }}>
                <Topbar/>
                <Suspense fallback={<Loading/>}>
                    <Outlet/>
                </Suspense>
            </Grid>
        </Grid>
    )
}

export default MainLayout