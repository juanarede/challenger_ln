import React from 'react'
import CardArticle from '../layoutComponent/articlesCard/articleCard';
import LargeCard from '../layoutComponent/largeCard/largeCard'
import './index.scss'
import articles from '../articles';

export default function index() {
  return (
    <>
      <div>
        <h2 className="title">Focal derecho</h2>
        {articles.map(article => (
          <div className="grid grid-cols-2 gap-4">
            <div className='column column-left'>
              <h2 className=" title-left">
                <span style={{ color: "#6466f7" }}>{article.lead}</span>{article.title}
              </h2>
              <p className="column text-left">{article.subtitle2}</p>
              <div className="author-container">
                <div className="circle"></div>
                <p className="card-author">{article.author}</p>
              </div>
            </div>
            <hr className="divider-horizontal column-mid" />
            <div className='column column-right'>
              <LargeCard className=" texto-right" />
            </div>
          </div>
        ))}
      </div>
      <div className="grid-cards">
        <div className="column-left-card"><CardArticle /></div>
        <div className="column-middle-card"><CardArticle /></div>
        <div className="column-right-card"><CardArticle /></div>
      </div>
    </>
  )
}
