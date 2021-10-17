import Post from '../Posts/Post/Post';
import { useSelector } from 'react-redux';
function Posts() {
  const post = useSelector((state) => state.posts);

  return !post.length ? (
    <div>loading...</div>
  ) : (
    <div className="">
      <p>multiple</p>
      <Post />
    </div>
  );
}

export default Posts;
