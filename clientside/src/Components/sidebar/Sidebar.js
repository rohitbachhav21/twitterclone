import React, { useState } from "react";
import Sidebaropt from '../sidebar/Sidebaropt'
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreIcon from '@mui/icons-material/More'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useNavigate } from "react-router-dom";
import './Sidebar.css'
import { Avatar, Divider, Hidden, IconButton } from "@mui/material";
import CustomLink from "./CustomLink";
import useLoggedInUser from "../../Hooks/useLoggedInUser";
const Sidebar = ({ user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const navigate = useNavigate();

    const [loggedInUser] = useLoggedInUser();

    const useProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "http://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

    const handleClick = element => {
        setAnchorEl(element.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleLogout = () => {
        navigate('/Login')
    }

    const result = user[0]?.email.split('@')[0];


    






    return (
        
            <div className='Sidebar'  >
                <TwitterIcon className="Twittericon" style={{ marginBottom: '20px', marginTop: '20px' }} />
                <CustomLink to='/Feed'>
                    <Sidebaropt className='icon' active Icon={HomeIcon} text='Home' />
                </CustomLink>

                <CustomLink to='/Explore'>
                    <Sidebaropt className='icon' active Icon={SearchIcon} text='Explore' />
                </CustomLink>

                <CustomLink to='/Notification'>
                    <Sidebaropt className='icon' active Icon={NotificationsIcon} text='Notifications' />
                </CustomLink>

                <CustomLink to='/Message'>
                    <Sidebaropt className='icon' active Icon={MailOutlineIcon} text='Message' />
                </CustomLink>

                <CustomLink to='/Bookmarks'>
                    <Sidebaropt className='icon' active Icon={BookmarkBorderIcon} text='Bookmarks' />
                </CustomLink>

                <CustomLink to='/List'>
                    <Sidebaropt className='icon' active Icon={ListAltIcon} text='Lists' />
                </CustomLink>

                <CustomLink to='/Profile'>
                    <Sidebaropt className='icon' active Icon={PermIdentityIcon} text='Profile' />
                </CustomLink>

                <CustomLink to='More'>
                    <Sidebaropt className='icon' active Icon={MoreIcon} text='More' />
                </CustomLink>

                <button varient='outline' className='sidebar_tweet'>
                    Tweet
                </button>

                <div className="temp" onClose={handleClose} onClick={handleClick} >
                    <div className="Profile_info" >

                        <Avatar src={useProfilePic}/>

                        <div className="user_info">
                            <h5>
                                {
                                    loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : user && user?.displayName
                                }
                            </h5>
                            <h6>{result}</h6>
                        </div>
                    </div>

                    <IconButton className="iconButton" size='small' sx={{ ml: 2 }} aria-controls={openMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? "true" : undefined}
                        onClose={handleClose} onClick={handleClick}
                    ><MoreHorizIcon />
                    </IconButton>

                    <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} style={{zIndex:9999,opacity:9999}}>
                        <MenuItem className='Profile_info1'>
                        <Avatar src={useProfilePic}/>
                            <div className="user_info subUser_info">
                                <div>
                                    <h5>{loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : user && user?.displayName}</h5>
                                    <h6>{result}</h6>
                                </div>
                                <div className='done_icon'><DoneOutlinedIcon /></div>
                            </div>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
                        <MenuItem onClick={handleLogout}>Log Out {result}</MenuItem>

                    </Menu>
                </div>


            </div>

        

    )
}

export default Sidebar;



