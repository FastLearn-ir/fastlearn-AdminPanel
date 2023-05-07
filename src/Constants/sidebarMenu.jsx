import { v4 as uuidv4 } from "uuid";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';

export const sidebarMenu = [
    {id: uuidv4(), title: 'صفحه اصلی', icon: <ListOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
    {id: uuidv4(), title: 'نقش ها و مجوزها', icon: <LockPersonOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
    {id: uuidv4(), title: 'دوره ها', icon: <LocalMoviesOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
    {id: uuidv4(), title: 'فصل ها', icon: <MovieCreationOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
    {id: uuidv4(), title: 'اپیزودها', icon: <LiveTvOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
    {id: uuidv4(), title: 'وبلاگ ها', icon: <AssignmentOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
    {id: uuidv4(), title: 'دسته بندی ها', icon: <CategoryOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
    {id: uuidv4(), title: 'کاربران', icon: <PermIdentityOutlinedIcon sx={{ color: "#DBDBEBAD" }} />},
]