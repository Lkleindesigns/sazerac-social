import React, { useState } from "react";
import axios from "axios";

// 1) no cookie, try posting - should error
// 2) w/ cookie but not a writer - should return article data
// 3) w/ cookie but is a writer - should return article data (edited)

const CreateArticlePage = routeProps => {
  const [inputs, setInputs] = useState({
    title: "",
    thumb_image: "",
    main_image: "",
    main_image_title: "",
    main_image_alt_text: "",
    body: ""
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios("https://morning-fortress-91258.herokuapp.com/api/v1/articles", {
      method: "POST",
      data: { article: inputs },
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error));
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
        <textarea
          id="body"
          placeholder="body"
          name="body"
          value={inputs.body}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateArticlePage;
