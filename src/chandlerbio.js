import React from 'react';
import profilePic from './assets/images/profilepic.jpg'; 
import './style.css';

function Project2() { // Updated function name
  return (
    <div>
      <header className="container">
        <nav className="box">
          <img src={profilePic} alt="Bio picture holding money" />
          <ul>
            <h1><li><a href="#about-me">Chandler Ames about</a></li></h1>
            <h1><li><a href="#my-applications">My Applications</a></li></h1>
            <h1><li><a href="#contact-me">Contact Me</a></li></h1>
          </ul>
        </nav>
      </header>

      <div className="main">
        <section className="placeholder" id="my-applications">
          <h1>My Applications</h1>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/bag-vegetables.jpg?quality=82&strip=all"
            alt="The Best Ways To Use Vegetables for Faster Weight Loss — Eat This Not That"
          />
          <h3>Recipe Finder!</h3>

          <button><a href="https://ccames91.github.io/MealWorms/">https://ccames91.github.io/MealWorms/</a></button>
          <button><a href="https://chatty-cat-d7c479363922.herokuapp.com/">https://chatty-cat-d7c479363922.herokuapp.com/</a></button>
        </section>

        <section className="box" id="about-me">
          <h1>Chandler Ames about</h1>
          <article>
            <h3>My name is Chandler Ames. I am 32 years old...</h3>
          </article>
        </section>

        <section className="box" id="contact-me">
          <h1>Contact Me</h1>
          <ul>
            <li>Phone# 206-228-0485</li>
            <li>Email: Eddiehawk1991@gmail.com</li>
          </ul>
        </section>
      </div>

      <footer>
        <div className='footerwrap'>
          <div className="footer">
            <div className="footerContent">
              <a href="https://ccames91.github.io/Project-2/">https://ccames91.github.io/Project-2/</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Project2; // Updated export name