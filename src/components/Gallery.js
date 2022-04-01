import React from 'react'

export default function Gallery(props) {
    const fruits = props.list.map(fruit => {
        return (
            <div className='fruit' key={fruit}>
                <img 
                    src={require(`../assets/${fruit}.jpg`)} 
                    alt={fruit} 
                    onClick={props.handleClick} 
                />
            </div>
        )
    })

    return (
        <div className='main'>
            <div className='scores-container'>
                <h3>Score: {props.score}</h3>
                <h3>High Score: {props.highScore}</h3>
            </div>
            <div className='gallery'>
                    {fruits}
            </div>
        </div>
    )
}