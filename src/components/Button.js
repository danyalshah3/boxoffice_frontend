import React from 'react'

export default function Button() {
    const clickOnMe = () => {
        console.log('Clicked')
    }
    return (
        <div>
            <button onClick={() => clickOnMe()}>Rent(HD) </button>
        </div>
    )
}
