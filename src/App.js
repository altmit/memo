import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout';
import MemoList from "./component/MemoList";
import InputMemo from "./component/InputMemo"
import MemoView from './component/MemoView';

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MemoList />} />
        <Route path='/add' element={<InputMemo />} />
        <Route path='/edit/:id' element={<InputMemo />} />
        <Route path='/memo/:id' element={<MemoView />} />
      </Route>
    </Routes>
  
  )
}

export default App;