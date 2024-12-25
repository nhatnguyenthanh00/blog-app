import React, { useCallback, useState } from 'react'
import { Button, Modal, TextareaAutosize, TextField } from '@mui/material'
import { useSelector } from 'react-redux';
import { modalState$ } from '../../redux/selectors'
import { useDispatch } from 'react-redux';
import { hideModal, createPost } from '../../redux/actions';
import './style.css'
export default function CreatePostModal() {


  const [data, setData] = useState({
    title: '',
    content: '',
    attachment: ''
  });

  const [base64, setBase64] = useState('');
  // const [fileName, setFileName] = useState('');

  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  console.log('[CreatePostModal]', isShow);
  const onClose = useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: ''}
    )
  }, [dispatch]);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Lấy file đầu tiên
    if (file) {

      // Chuyển file sang Base64
      const reader = new FileReader();
      reader.onload = () => { 
        setBase64(reader.result);
        setData(({ ...data, attachment: reader.result })); 
      };
      reader.onerror = (error) => {
        console.error('Error converting file to Base64:', error);
      };
      reader.readAsDataURL(file); 
    }
  };

  const onSubmit = useCallback(() => {
    console.log(data);
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);
  const body = (
    <div className='container' id='simple-modal-title'>
      <h2>Create New Post</h2>
      <form noValidate autoComplete='off' className='form'>
        <TextField className='title' required label='Title' value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        <TextareaAutosize className='textarea' minRows={10} maxRows={15} placeholder='Content...' value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })} />
        <input type='file' accept='image/*' onChange={handleFileChange}></input>
        <div className='footer'>
          <Button variant='contained' color='primary' component='span' fullWidth onClick={onSubmit}>Create</Button>
        </div>
      </form>
    </div>
  )
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  )
}
