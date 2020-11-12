import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
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

  const handleCKEditor = (e, editor) => {
    
    const data = editor.getData()
    setBody(data)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let article = {...inputs, body}
    dispatch(createArticle(article))
    routeProps.history.push('/articles')
  };

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
        <CKEditor  
          editor={ClassicEditor}
          onChange={handleCKEditor}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateArticlePage;
