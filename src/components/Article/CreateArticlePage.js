import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@lklein0189/ckeditor5-build-blog'
import { createArticle } from '../../reducers/articleReducer'
import { useDispatch } from 'react-redux'
import { config } from '../../editorConfig'
// needs validations

const CreateArticlePage = routeProps => {
  ClassicEditor.config = config
  const dispatch = useDispatch()

  const [body, setBody] = useState('')

  const [inputs, setInputs] = useState({
    title: "",
    thumb_image: "",
    main_image: "",
    main_image_title: "",
    main_image_alt_text: "",
  });

  const [image, setImage] = useState()

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleImage = e => {
    const file = e.target.files[0]
    setImage(file)
  }

  const handleCKEditor = (e, editor) => {
    const data = editor.getData()
    setBody(data)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("jumbotron_image", image)
    let article = {...inputs, body, jumbotron_image: formData}
    dispatch(createArticle(article))
    // routeProps.history.push('/articles')
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
        <input 
          id="jumbotron image"
          placeholder="jumbotron image"
          name="jumbotron_image"
          type="file"
          value={inputs.jumbotron_image}
          onChange={handleImage}
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
