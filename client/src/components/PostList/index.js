import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'

import Post from './Post'
import { postState$ } from '../../redux/selectors'
export default function PostList() {

    const dispatch = useDispatch();
    const posts = useSelector(postState$);
    console.log('[PostList]', posts)
    useEffect(() => {
        dispatch(actions.getPosts.getPostRequest());
    }, [dispatch]);
    return (
        <Grid container spacing={2} alignItems={'stretch'}>
            {posts.map( (post) => 
            <Grid item xs={12} sm={6}>
                <Post key={post._id} post={post} />
            </Grid>  
            )}
        </Grid>
    )
}
