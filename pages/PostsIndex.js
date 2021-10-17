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
    <div className="flex flex-col">
      <div className="flex justify-center items-center text-4xl bg-blue-500 mb-8 h-12">
        Daily worries
      </div>
      <div className="flex justify-between">
        <Posts />
        <Form />
      </div>
    </div>
  );
}

export default PostsIndex;
