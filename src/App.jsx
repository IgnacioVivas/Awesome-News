import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Article from './components/Article'
import CategoryContainer from './components/CategoryContainer'
import Header from './components/Header'
import NewsListContainer from './components/NewsListContainer'
import NewsContextProvider from './context/NewsContext'

function App() {

  return (
    <NewsContextProvider>
      <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<NewsListContainer/>} />
          <Route path='/new/:id' element={<Article/>}/>
          <Route path='/recent-news' element={<NewsListContainer/>}/>
          <Route path='/top-rated' element={<NewsListContainer/>}/>
          <Route path='/categories' element={<CategoryContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </NewsContextProvider>
  )
}

export default App
