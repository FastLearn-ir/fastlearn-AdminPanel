import { useState } from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Editor } from "../../Components";

const AddBlog = () => {
    const [post, setPost] = useState('');
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h1" fontSize={28} className="text-white" gutterBottom>
                افزودن بلاگ جدید
            </Typography>
            <Box component={'form'} autoComplete="off">
                <Grid container spacing={2} mt={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="عنوان"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="توضیح"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component={'p'} fontSize={22} mb={2} className="text-white">محتوا</Typography>
                        <Editor value={post} setValue={setPost}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="url"
                            name="url"
                            label="url"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>امنیت</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">برچسب</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>امنیت</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="file"
                            name="file"
                            type="file"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" color="warning">ثبت بلاگ جدید</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}

export default AddBlog