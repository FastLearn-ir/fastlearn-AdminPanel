import { Link } from "react-router-dom"
import { Box, Button, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const Blogs = () => {
    return (
        <Box className="my-4">
            <Stack direction="row" alignItems={'center'} justifyContent={'space-between'}>               
                <Typography variant="h1" fontSize={30} className="text-white">وبلاگ ها</Typography>
                <Button variant="outlined" color="warning">
                    <Link to={`add-blog`}>
                        افزودن وبلاگ جدید
                        <AddIcon/>
                    </Link>
                </Button>
            </Stack>
        </Box>
    )
}

export default Blogs