import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import WriteToDo from './pages/WriteToDo'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writetodo" element={<WriteToDo/>} />
          <Route path="*" element={<div>잘못된 페이지입니다</div>}/>
          </Routes>
    </div>
  );
}

export default App;
