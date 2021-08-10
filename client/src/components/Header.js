import React from 'react';
import '../styles/globals.scss';
import '../styles/Header.scss';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="text-header">
            <p>Codelândia</p>
            <p>blog</p>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Pesquisar no blog" />
            <button
              className="add-post"
              onClick={() => {
                history.push('/create');
              }}
            >
              +
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
