import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"}
          alt="Founder"
        />

        <h2>Manoj Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/@BCAPathShala" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/manojofficialmj" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/bcapathshala" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
