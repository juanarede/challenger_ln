import React from 'react'
import articles from '../../articles';

import '../largeCard/largeCard.scss'

export default function largeCard() {
  return (
   <>
      <div className="card-container-large"> {/* Contenedor con ancho deseado */}
      {articles.map(article => (
        <div className="card-large">
          <div className="image-large"></div>
          <div className="content-large">
          <h2 className=" title-left-card-large">
        <span style={{ color: "#6466f7" }}>{article.lead}</span>{article.title}
      </h2>
            <p className="card-author-large">{article.author}</p>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}
