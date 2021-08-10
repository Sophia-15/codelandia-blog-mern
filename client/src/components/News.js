import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../styles/globals.scss';
import '../styles/News.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import sr from 'scrollreveal';

function News() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3333/all').then((response) => {
      setBlogPosts(response.data);
    });
  });

  useEffect(() => {
    const scroll = sr({
      duration: 2000,
      origin: 'top',
      distance: '50px',
      reset: true,
    });
    scroll.reveal('.news', { delay: 100 });
    scroll.reveal('.date-like', { delay: 300 });
    scroll.reveal('.title', { delay: 400 });
    scroll.reveal('.description', { delay: 500 });
  }, []);

  return (
    <div>
      <main>
        <div className="news-container">
          {blogPosts.map((value, key) => {
            return (
              <div className="news" key={key}>
                <div className="date-like">
                  <span>{value.createdAt}</span>
                  <FontAwesomeIcon icon={faHeart} className="like" />
                </div>
                <h1 className="title"> {value.title} </h1>
                <p className="description"> {value.description}</p>
                <br />
                <br />
                <p className="author">
                  <strong>Nome do(a) Autor(a): </strong>
                  {value.author}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default News;
