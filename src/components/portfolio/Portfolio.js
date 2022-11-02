import React from 'react';
import got from '../../assets/got.png';
import ebook from '../../assets/ebook-generator.png';
import  "../portfolio/portfolio.css";

const styles = {
    p: {
        color: "#FFB4A2",
    },
};

function Portfolio() {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 mt-96'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff66c4]'>Projects</p>
              <p className='py-6 text-xl'>Check out my work!</p>
          </div>
  
          {/* container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
  
               {/* grid item */}
               <div style={{ backgroundImage: `url(${got})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                          Game of Thrones Cheat Sheet
                      </span>
                      <div className='justify-center text-white'>
                      MVC, JavaScript, CSS, MySql, Express
                      </div>
                      {/* <div className='justify-center text-white'>
                          MERN Stack
                      </div> */}
                      <div className='pt-8 text-center'>
                         <a href="https://shrouded-spire-99945.herokuapp.com/" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                          </a> 
                          <a href="https://github.com/AliCelikay/GameOfThronesCheatSheet-Project2" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                          </a> 
                      </div>
                  </div>
              </div>
              
              {/* grid item */}
              <div style={{ backgroundImage: `url(${ebook})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                          Free E-book Generator
                      </span>
                      <div className='justify-center text-white'>
                          Web API
                      </div>
                      {/* <div className='justify-center text-white'>
                          MVC, JavaScript, CSS, MySql, Express
                      </div> */}
                      <div className='pt-8 text-center'>
                         <a href="https://terrencebudnik.github.io/top-book-generator/" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                          </a> 
                          <a href="https://github.com/terrencebudnik/top-book-generator" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                          </a> 
                      </div>
                  </div>
              </div>
{/*               
              {/* grid item
              <div style={{ backgroundImage: `url(${blog})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* hover effects */}
                  {/* <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                          Tech Blog App
                      </span>
                      <div className='justify-center text-white'>
                          Social blog site for techies
                      </div>
                      <div className='justify-center text-white'>
                          MVC, JavaScript, CSS, MySql, Express
                      </div>
                      <div className='pt-8 text-center'>
                         <a href="https://the-tech-blog-am.herokuapp.com/" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                          </a> 
                          <a href="https://github.com/atmason90/tech-blog-app" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                          </a> 
                      </div>
                  </div>
              </div> */} 
  
              {/* grid item */}
              {/* <div style={{ backgroundImage: `url(${editor})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* hover effects */}
                  {/* <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                          Text Editor PWA
                      </span>
                      <div className='justify-center text-white'>
                          Progressive Web Application
                      </div>
                      <div className='justify-center text-white'>
                          JavaScript, IndexedDB, Express, Heroku
                      </div>
                      <div className='pt-8 text-center'>
                         <a href="https://editmytext.herokuapp.com/" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                          </a> 
                          <a href="https://github.com/atmason90/text-editor" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                          </a> 
                      </div>
                  </div>
              </div> */}
   
              {/* grid item */}
              {/* <div style={{ backgroundImage: `url(${social})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}
                  
                  {/* hover effects */}
                  {/* <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                          Social Network API
                      </span>
                      <div className='justify-center text-white'>
                          Backend of a Social Media Site
                      </div>
                      <div className='justify-center text-white'>
                          JavaScript, Express, MongoDB
                      </div>
                      <div className='pt-8 text-center'>
                         <a href="https://user-images.githubusercontent.com/99947655/169758282-4292a54e-8e30-4d30-ab04-9b888abc0745.mp4" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                          </a> 
                          <a href="https://github.com/atmason90/social-network-api" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                          </a> 
                      </div>
                  </div>
              </div> */}
  
              {/* grid item */}
              {/* <div style={{ backgroundImage: `url(${ecomm})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}
                  
                  {/* hover effects */}
                  {/* <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                          E-commerce Backend
                      </span>
                      <div className='justify-center text-white'>
                          Backend of an E-Commerce site
                      </div>
                      <div className='justify-center text-white'>
                          JavaScript, MySql, Express
                      </div>
                      <div className='pt-8 text-center'>
                         <a href="https://drive.google.com/file/d/1KBD6tlB82vbEWURTLGDzOHshITIDAft2/view?usp=sharing" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                          </a> 
                          <a href="https://github.com/atmason90/e-comm-back-end" target='#'>
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                          </a> 
                      </div>
                  </div> */}
              {/* </div> */}
          </div>
        </div>
      </div>
    )
  }

export default Portfolio;