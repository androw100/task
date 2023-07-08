import React from 'react'

export default function FunCard(props) {
    return (
        <div className="card">
            <h3>{props.text1}</h3>
            <p>{props.text2}</p>
        </div>
    )
}
