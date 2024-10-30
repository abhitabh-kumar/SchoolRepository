import { Grid2 } from '@mui/material'
import React from 'react'
import './BlogCard.css'
import blogImage from '../../assests/SchoolActivity.jpg'

const BlogCard = ({item}) => {
  return (
    <Grid2 container sx={{maxWidth:'400px'}}>
        <Grid2 item>
            <img className="BlogCardImage" src={blogImage}/>
        </Grid2>
        <Grid2 item display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <div className="blogDate">
                { item.date}
            </div>
            <div className="blogDetails">
                <p className='blogDesc'>{item.description}</p>
                <p className='blogAuthor'>{item.author}</p>
            </div>
        </Grid2>
    </Grid2>
  )
}

export default BlogCard