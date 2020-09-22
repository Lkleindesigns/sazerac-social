import React, { useState } from "react";
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(0);

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
        <button onClick={() => setToggle(!toggle)}>
          <FaAlignRight />
        </button>

        <ul className={toggle ? "links show-nav" : "links"}>
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
