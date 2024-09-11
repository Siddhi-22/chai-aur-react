import React from 'react';
import { Container, PostCard } from '../components';


function AddPost() {
  return (
    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>

    </div>
  )
}

export default AddPost;