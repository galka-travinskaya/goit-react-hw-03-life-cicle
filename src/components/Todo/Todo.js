import React from 'react'
import IconButton from '../IconButton'
import {ReactComponent as DeleteIcon} from '../../icons/delete.svg'

const Todo = ({text, completed, onToggleCompleted, onDelete}) => (
    <div>
            <input
                type="checkbox"
                className="TodoList__checkbox"
                chacked={completed}
                onChange={onToggleCompleted}
            />
            <p className="TodoList__text">{text}</p>
            {/* <button
              type="button"
              classNames="TodoList__btn"
              onClick={onDelete}
            >
              Удалить
            </button> */}
            <IconButton>
                <DeleteIcon width="32" height="32" fill="#fff"/>
            </IconButton>
        </div>
)

export default Todo;