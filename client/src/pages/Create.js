import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import '../styles/Modal.scss';
import toast, { Toaster } from 'react-hot-toast';

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const history = useHistory();

  const addToPosts = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3333/create', {
      title: title,
      description: description,
      author: author,
    });

    if ((title, description, author)) {
      history.push('/');
    } else {
      toast.error('Insira todos os dados!', {
        duration: 2000,
        position: 'top-right',
        style: {
          width: '30rem',
          height: '5rem',
          fontSize: '1.4rem',
          fontFamily: 'Lexend Deca',
        },
      });
    }
  };

  return (
    <div>
      <Toaster />
      <form>
        <div className="container">
          <label htmlFor="title">Título da notícia</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="description">Descrição da notícia</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <label htmlFor="author">Nome do(a) Autor(a)</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <button onClick={addToPosts}>Adicionar notícia</button>
        </div>
      </form>
    </div>
  );
}
