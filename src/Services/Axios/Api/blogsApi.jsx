import apiRequest from "../Configs/Configs";

// @desc Get All Blogs
// @route GET https://localhost:4000/blogs
const getAllBlogs = () => {
    return apiRequest.get('/blogs')
}

const createBlog = (blog) => {
    return apiRequest.post('/blogs', blog)
}

export { getAllBlogs, createBlog };