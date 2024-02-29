import React from 'react'
import './articleCard.scss'
import articles from '../../articles';

export default function articleCard() {
  return (
    <>
      <div className="card-container"> {/* Contenedor con ancho deseado */}
      {articles.map(article => (
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <p className="card-text"><span className='lead'>{article.lead}</span>{article.subtitle}</p>
            <p className="card-author">{article.author}</p>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}
