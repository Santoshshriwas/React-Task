import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componet/Home'
import Display from './componet/Display'
import Product from './componet/Product'
import Search from './componet/Search'

function App() {


  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='display' element={<Display/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='search' element={<Search/>}/>
</Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
// import React from 'react'
// import Home from './componet/Home'

// const App = () => {
//   return (
//     <>
//     <Home/>
//     </>
//   )
// }

// export default App
