import React from 'react'


function CardItem({ src, title, text }) {
  return (
    <li className="cards__item">
      <div className="compare-item">
        <div className="compare-image-list">
          <img src={src} alt={title} />
          <div className="compere-item-title">{title}</div>
          <div className="compere-item-exp">{text}</div>
        </div>
      </div>
    </li>
  )
}

export default CardItem
