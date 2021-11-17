import React from 'react'

export const Item = ({ id, title, color, price, pictureUrl }) => {
    return (
        <article key={id} className="card m-3" style={{ width: "18rem" }}>
            <img src={pictureUrl} alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{color}</p>
                <button className="btn btn-primary">Agregar</button>
            </div>
        </article>
    )
}
