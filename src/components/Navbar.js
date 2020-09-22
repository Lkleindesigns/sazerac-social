import React from 'react'
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
  let state = {
    toggle:false
  }

  function Toggle() {
    this.setState({toggle:!this.state.toggle})
  }

  const li = [
    {
      link: "/",
      text:"Home"
    },
    {
      link: "/about/",
      text:"About us"
    },
    {
      link: "/contact/",
      text:"Contact us"
    }
  ];

  return (
    <>
      <div className="navBar">
        <button onClick={Toggle}>
          <FaAlignRight />
        </button>
        <ul className={state.toggle ? "links show-nav" : "links"}>
          {
            li.map((objLink, i) => {
              return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Navbar
