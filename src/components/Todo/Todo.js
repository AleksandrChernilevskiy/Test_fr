import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import ItemList from '../ItemList/ItemList';
import styles from './Todo.module.css';
import { DragDropContext } from 'react-beautiful-dnd';
import Modal from '../Modal/Modal.js';
import Button from '@material-ui/core/Button';


const Todo = () => {
  const [modalActive, setModalActive] = useState(false);
  const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
  }

  const [items, setItems] = useState(initialState.items);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  });

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
  
    setItems(newItemList);
  }

  const onClickAdd = (value) => {
    setItems([
      ...items,
      {
        value,
        isDone: false,
        id: Date.now()
      }
    ]);
  }

  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;
    
    const newItemList = [...items];
    const [deletedItem] = newItemList.splice(source.index, 1);
    newItemList.splice(destination.index, 0, deletedItem);

    setItems([...newItemList]);
  };

  return (
    <Card className={styles.wrap}>
      <DragDropContext onDragEnd={onDragEnd}>
        <header className={styles.header}>
          <h1 className={styles.title}>Список моих дел</h1>
        </header>
        <div className={styles.items_section}>
          <ItemList
            onClickDone={onClickDone} 
            onClickDelete={onClickDelete} />
        </div>
        <Button variant='outlined' color='primary' onClick={() => setModalActive(true)}>
          Добавить Запрос
        </Button>
        <Button variant="outlined" color="secondary">
          Тест GraphQL
        </Button>
        <Modal active={modalActive} setActive={setModalActive}>
        </Modal>
      </DragDropContext>  
    </Card>);
};

export default Todo;