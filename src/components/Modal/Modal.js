import React from 'react';
import styles from './Modal.css';
import classnames from 'classnames';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputItem from '../InputItem/InputItem.js';

const Modal = ({ active, setActive, children }) => {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>
				{children}
	      <InputItem />
			</div>
		</div>
	)
}

export default Modal;