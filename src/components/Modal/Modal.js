import React from 'react';
import styles from './Modal.css';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Modal = ({ active, setActive, children }) => {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>
				{children}
				<form className={styles.form}>
	        <TextField
	          id="filled-full-width"
	          style={{ margin: 8 }}
	          placeholder="Добавить Запись"
	          helperText=""
	          fullWidth
	          margin="normal"
	          InputLabelProps={{
	            shrink: true,
	          }}
	          variant="filled"
        	/>
	        <Button variant='outlined' color='primary'>
	          Ок
	        </Button>
	        <Button variant='outlined' color='secondary' onClick={() => setActive(false)}>
	          Отмена
	        </Button>
      	</form>
			</div>
		</div>
	)
}

export default Modal;