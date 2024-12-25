import React, { useCallback } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { updatePost } from '../../../redux/actions'
export default function Post({ post }) {

    const dispatch = useDispatch();

    const onLikeBtnClick = useCallback(() => {
        dispatch(updatePost.updatePostRequest({...post, likeCount: post.likeCount + 1})); 
    },[dispatch, post])
    return (
        <Card>
            <CardHeader avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
                action={<IconButton>
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>}
            />
            <CardMedia image={post.attachment} title="Title" style={{ height: 150 }}></CardMedia>
            <CardContent>
                <Typography variant='h5' color='textPrimary'>{post.title}</Typography>
                <Typography variant='body2' color='textSecondary' component="p">{post.content}</Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon onClick={onLikeBtnClick}></FavoriteIcon>
                    <Typography component="span" color="textSecondary">{`${post.likeCount} likes`}</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}
