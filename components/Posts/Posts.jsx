import Post from '../Posts/Post/Post';
import { useSelector } from 'react-redux';
function Posts() {
  const post = useSelector((state) => state.posts);
  console.log(post);
  return (
    <div>
      <p>multiple</p>
      <Post />
    </div>
  );
}

export default Posts;
