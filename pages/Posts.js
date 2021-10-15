import Form from '../components/Form/Form';
import Posts from '../components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../redux/actions/posts';

function PostsIndex() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Form />
      <Posts />
    </div>
  );
}

export default PostsIndex;
