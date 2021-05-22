import React from 'react';
import classnames from 'classnames';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItems extends React.Component {
  state = {
    inputValue: '',
    error: false,
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.inputValue === '') {
      this.setState({
          error: true,
          repeat: false
      })
    } else {
      this.setState({
          inputValue: '',
          error: false,
          repeat: false
      })
      this.props.onClickAdd(this.state.inputValue);
    }
  }

  render() {
    const { onClickAdd, items, active, setActive, children } = this.props;

    return (
      <form
        onSubmit={this.onSubmit}
        className={classnames({
          [styles.form]: true,
          [styles.error]: this.state.error,
        })}>
        <input 
          type='text'
          placeholder={'Сделать Запись'}
          value={this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value})}
          className={styles.input}
        />
        <Button variant='outlined' color='primary' className={styles.btn_submit}>
            Ок
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => setActive(false)} className={styles.btn_cancel}>
            Отмена
          </Button>
      </form>);
  }
};

export default InputItems;