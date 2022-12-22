import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "./styles.css"

function NewTodo({ onNewTodo }) {
    const ENTER_KEY = 13;
    const ESCAPE_KEY = 27;

    const [value, setValue] = useState('');

    const erase = () => {
        setValue('');
      }
    
      const submit = () => {
        if(onNewTodo){
            onNewTodo(value);
            console.log('submit', value);
            erase();    
        } 
      }
    
      const onChange = (event) => {
        setValue(event.target.value);
      }
    
      const onKeyDown = (event) => {
        if(event.which === ENTER_KEY) {
          submit();
        } else if(event.which === ESCAPE_KEY) {
          erase();
        }
      }

    return (
        <input 
            className='new-todo' 
            placeholder='Digite aqui a tarefa'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo