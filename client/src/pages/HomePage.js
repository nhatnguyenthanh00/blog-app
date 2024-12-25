import React, { useCallback } from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { Container, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { useDispatch } from 'react-redux'
import { showModal } from '../redux/actions'
import CreatePostModal from '../components/CreatePostModal'

export default function HomePage() {

    const dispatch = useDispatch();

    const openCreatePostModal = useCallback(() => {
        dispatch(showModal());
    }, [dispatch]);
    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreatePostModal />
            <Fab color='primary' aria-label='add' style={{ position: 'fixed', right: 20, bottom: 20 }} onClick={openCreatePostModal}>
                <AddIcon></AddIcon>
            </Fab>
        </Container>
    )
}
