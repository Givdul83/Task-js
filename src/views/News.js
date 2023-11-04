import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import ArticleShowCase from '../components/ArticleShowCase/ArticleShowCase';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const News = () => {
  return (
    <div className="wrapper">
    <Header/>
    <ArticleShowCase/>
    
    <div>NewsShowCase</div>
    <NewsLetter/>
    <Footer/>
    </div>
    )
}

export default News