import { CircularProgress, Stack } from "@mui/material";

const Loading = () => {
    return (
        <Stack direction={'row'} height={1} alignItems={'center'} justifyContent={'center'}>
            <CircularProgress color="success" />
        </Stack>
    )
}

export default Loading