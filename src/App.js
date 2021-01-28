import React, { Component } from 'react';
import Counter from './components/Counter/';
// import Dropdown from './components/Dropdown/';
// import ColorPicker from './components/ColorPicker/';
import TodoList from './components/TodoList';
// import Form from 'components/Form';
import TodoEditor from 'components/TodoEditor';
// import initialTodos from './todos.json';
import shortid from 'shortid';
import Filter from 'components/Filter';
import Modal from './components/Modal/Modal'
// import Clock from './components/Clock'
// import Tabs from './components/Tabs';
// import tabs from './tabs.json'
import IconButton from './components/IconButton'
import {ReactComponent as AddIcon} from './icons/add.svg'

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D88' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F5185' },
// ];

class App extends Component {
  state = {
    // todos: initialTodos,
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount () {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    
    if(parsedTodos) {
      this.setState({todos: parsedTodos});
    }
    // или
    // setTimeout(() => {
    //   this.setState({todos: parsedTodos});
    // }, 2000);
  }

  componentDidUpdate (prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    // сравниваем старый и новый массивы
    if(nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    // закрываем модалку добавления заметки
    if(nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    // создаем новый массив [...старый, элемент]
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  // получаем доступ к данным формы
  formSubmitHandler = data => {
    console.log(data);
  };

  toggleComplited = todoId => {
    console.log(todoId);

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    // 1й вариант
    // const completedTodos = todos.filter(todo => todo.completed);
    // 2й вариант
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }));
  }

  render() {
    console.log('Add render');
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const filteredTodos = this.getVisibleTodos();
    const completedTodos = this.calculateCompletedTodos;
    // console.log(completedTodos);
    return (
      <>
        < IconButton onClick={this.toggleModal} aria-label="Add todo">
          < AddIcon width="40" height="40" fill="white"/>
        </IconButton>
        {/* {showModal && < Clock />}
        <button type="button" onClick={this.toggleModal}>OPEN/CLOSE TIMER</button> */}

        {/* <Tabs items={tabs}/>
        <button type="button" onClick={this.toggleModal}>OPEN MODAL</button> */}
        
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
         </Modal>
        )}
        
        {/* // получаем доступ к данным формы
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Состояние компонента</h1> */}

        <Counter initialValue={10}/>
        {/* <Dropdown/> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во туду: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodos}</p>
        </div>

        <Filter 
          value={filter} 
          onChange={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleComplited}
        />
      </>
    );
  }
}

export default App;
