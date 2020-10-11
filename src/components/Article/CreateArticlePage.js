import React, { useState } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { createArticle } from '../../reducers/articleReducer'
import { useDispatch } from 'react-redux'
// needs validations

const CreateArticlePage = routeProps => {
  const dispatch = useDispatch()
  const [body, setBody] = useState('')

  const [inputs, setInputs] = useState({
    title: "",
    thumb_image: "",
    main_image: "",
    main_image_title: "",
    main_image_alt_text: "",
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleQuill = (value) => {
    setBody(value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let article = {...inputs, body}
    dispatch(createArticle(article))
  };

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{ 'align': [] }],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean'],
    ],
  }


  return (
    <div>
      <h1>Write a post! (private route)</h1>

      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          id="title"
          name="title"
          placeholder="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />
        <input
          id="thumb image"
          placeholder="thumb image"
          name="thumb_image"
          value={inputs.thumb_image}
          onChange={handleChange}
          required
        />
        <input
          id="main image"
          placeholder="main image"
          name="main_image"
          value={inputs.main_image}
          onChange={handleChange}
          required
        />
        <input
          id="main image title"
          placeholder="main image title"
          name="main_image_title"
          value={inputs.main_image_title}
          onChange={handleChange}
          required
        />
        <input
          id="main image alt text"
          placeholder="main image alt text"
          name="main_image_alt_text"
          value={inputs.main_image_alt_text}
          onChange={handleChange}
          required
        />
        <ReactQuill
          id="quill"
          name="quill"
          value={body}
          onChange={handleQuill}
          modules={modules}
          theme="snow"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateArticlePage;
