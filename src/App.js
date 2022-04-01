import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { fruitsArray } from './data'

export default function App() {
    const [list, setList] = useState(fruitsArray)
    const [clickedItems, setClickedItems] = useState([])
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    useEffect(() => {
        const newArray = shuffle([...fruitsArray]);
        setList(newArray);
    }, []);

    function trackItems(e) {
        setClickedItems(oldArray => [...oldArray, e.target.alt]);
    }

    function handleShuffle() {
        const changes = shuffle([...list]);
        setList(changes);
    }

    function checkForDuplicate(e) {
        if (clickedItems.includes(e.target.alt)) {
            if (score > highScore) {
                setHighScore(score)
            }
            setScore(0)
            setClickedItems([])
            return
        }
        trackItems(e)
        const currentScore = clickedItems.length + 1
        setScore(currentScore)
    }

    function handleClick(e) {
        handleShuffle()
        checkForDuplicate(e)
    }

    return (
        <div className='container'>
            <Header />
            <Gallery 
                handleClick={handleClick}
                list={list}
                score={score}
                highScore={highScore}
            />
            <Footer />
        </div>
    )
}