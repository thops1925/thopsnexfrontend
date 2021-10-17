import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/posts';

function Form() {
  const [isPosts, setPosts] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(isPosts));
  };
  const clear = () => {};

  return (
    <div className="bg-gray-500 ">
      <div className="p-2">
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label>Create you're daily quotes</label>
          <textarea
            className="resize-none text-left"
            name="creator"
            placeholder="Create"
            value={isPosts.creator}
            onChange={(e) => setPosts({ ...isPosts, creator: e.target.value })}
          />

          <textarea
            name="title"
            placeholder="Title"
            value={isPosts.title}
            onChange={(e) => setPosts({ ...isPosts, title: e.target.value })}
          />

          <textarea
            name="message"
            placeholder="message"
            value={isPosts.message}
            onChange={(e) => setPosts({ ...isPosts, message: e.target.value })}
          />
          <textarea
            name="tags"
            placeholder="tags"
            value={isPosts.tags}
            onChange={(e) => setPosts({ ...isPosts, tags: e.target.value })}
          />
          <div>
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPosts({ ...isPosts, selectedFile: base64 })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-red-50 rounded-sm h-8 uppercase"
          >
            submit
          </button>
          <button
            onClick={clear}
            className="w-full bg-red-600 text-red-50 rounded-sm h-8 uppercase"
          >
            clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
