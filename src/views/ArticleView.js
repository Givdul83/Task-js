import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import ArticleShowCase from '../components/ArticleShowCase/ArticleShowCase';
import NewsArticles from '../components/NewsArticles/NewsArticles';

const ArticleView = () => {
  return (
    <div className="wrapper">
    <Header/>
    <ArticleShowCase/>
    
    <div>ArticleView</div>
    
    <NewsArticles/>
    
    <Footer/>
    </div>
    )
}

export default ArticleView