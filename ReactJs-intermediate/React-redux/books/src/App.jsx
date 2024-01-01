import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetail from "./components/BookDetail"
import BooksList from "./components/BooksList"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BooksList />} />
          <Route path='/book/:id' element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
