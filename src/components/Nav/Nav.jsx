import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import style from './nav.module.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className={style.nav}>
          <div className={style.navContainer}>
            <Link to="/home" className={style.button}>
              <button>Home</button>
            </Link>
            <Link to="/about" className={style.button}>
              <button>About</button>
            </Link>
          </div>
          <SearchBar onSearch={this.props.onSearch} />
        </nav>
      </div>
    );
  }
}

