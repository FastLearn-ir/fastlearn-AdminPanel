import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Editor, SelectBox } from "../../Components";
import { createBlog } from "../../Services/Axios/Api/blogsApi";

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);
    const [thumbnail, setThumbnail] = useState({});

    const createNewBlog = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title)
            formData.append('description', description)
            formData.append('content', content)
            formData.append('slug', slug)
            formData.append('category', category)
            formData.append('tags', tags)
            formData.append('thumbnail', thumbnail)
            console.log(formData);

            const response = await createBlog(formData);
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    }

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
                            id="title"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            label="عنوان"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            label="توضیح"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component={'p'} fontSize={22} mb={2} className="text-white">محتوا</Typography>
                        <Editor value={content} setValue={setContent}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="url"
                            name="url"
                            value={slug}
                            onChange={e => setSlug(e.target.value)}
                            label="url"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SelectBox title={'دسته بندی'} value={category} setValue={setCategory}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SelectBox title={'برچسب'} value={tags} setValue={setTags}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="file"
                            name="file"
                            type="file"
                            onChange={e => setThumbnail(e.target.files[0])}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" color="warning" onClick={createNewBlog}>ثبت بلاگ جدید</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}

export default AddBlog