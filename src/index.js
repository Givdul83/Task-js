import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import ArticleView from './views/ArticleView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/contacts' element={<Contacts />} />
        <Route path= '/news' element={<News />} />
        <Route path= '/articleview' element ={<ArticleView />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

