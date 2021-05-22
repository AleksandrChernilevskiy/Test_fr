import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './App.module.css';
import Todo from '../Todo/Todo.js';

const App = () => {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div>
            Приложение
        </div>
      </header>
      <div className={styles.content}>
        <Todo />
      </div>
    </div>  
  )
};

export default App;

