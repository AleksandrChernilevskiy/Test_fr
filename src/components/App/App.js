import React, { useState } from 'react';
import Modal from '../Modal/Modal.js';
import Button from '@material-ui/core/Button';
// import InputItem from '../InputItem/InputItem.js';
import styles from './App.module.css';
import ItemList from '../ItemList/ItemList.js'

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div>
            Приложение
        </div>
      </header>
      <ItemList />
      <Button variant='outlined' color='primary' onClick={() => setModalActive(true)}>
      Добавить Запрос
      </Button>
      <Button variant="outlined" color="secondary">
        Тест GraphQL
      </Button>
      <Modal active={modalActive} setActive={setModalActive}>
      </Modal>
    </div>  
  )
};

export default App;

