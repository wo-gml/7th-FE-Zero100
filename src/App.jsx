<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Main from './pages/Main'
import Inquiry from './pages/Inquiry'
import InquiryCreate from './pages/InquiryCreate'
import MyPage from './pages/MyPage'
import InquiryDetail from './pages/InquiryDetail'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/inquiry/create" element={<InquiryCreate />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/inquiry/:id" element={<InquiryDetail />} />
    </Routes>
  )
}

export default App
=======
import { useState } from 'react';
import Text from './components/Text';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Eat', completed: true },
    { id: 2, text: 'Sleep', completed: false },
    { id: 3, text: 'Repeat', completed: false },
  ]);
  
  const [filter, setFilter] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleAdd = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const saveTask = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  const activeTasksCount = todos.filter((todo) => !todo.completed).length

  return (
    <div className="app-container">
      
      <h1 className="main-title"><b>TodoMatic</b></h1>
      <h2 style={{ width: '100%', textAlign: 'left' }}><b>What needs to be done?</b></h2>

      <div className="todo-header" style={{ marginBottom: '10px' }}>
        <Input 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <Button label="Add" onClick={handleAdd} />
      </div>

      <div className="filters">
        <Button label="Show all tasks" onClick={() => setFilter('All')} />
        <Button label="Show active tasks" onClick={() => setFilter('Active')} />
        <Button label="Show completed tasks" onClick={() => setFilter('Completed')} />
      </div>

      <h2 id="list-heading" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
        <b>{activeTasksCount} tasks remaining</b>
      </h2>

      <ul className="todo-list" style={{ paddingLeft: '20px' }}>
        {filteredTodos.map((todo) => {
          const taskName = todo.text;
          const isEditing = editingId === todo.id;

          return (
            <li className="todo-item" key={todo.id} style={{ marginBottom: '15px' }}>
              
              <div className="todo-content" style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox 
                  checked={todo.completed} 
                  onChange={() => toggleTask(todo.id)} 
                />
                {isEditing ? (
                  <Input 
                    value={editingText} 
                    onChange={(e) => setEditingText(e.target.value)} 
                  />
                ) : (
                  <Text content={taskName} />
                )}
              </div>

              <div className="todo-buttons" style={{ marginTop: '5px', marginLeft: '25px', display: 'flex', gap: '5px' }}>
                {isEditing ? (
                  <Button label="Save" onClick={() => saveTask(todo.id)} />
                ) : (
                  <Button 
                    label={`Edit ${taskName}`} 
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditingText(taskName);
                    }} 
                  />
                )}
                <Button 
                  label={`Delete ${taskName}`} 
                  onClick={() => deleteTask(todo.id)} 
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
>>>>>>> upstream/조재희/main
