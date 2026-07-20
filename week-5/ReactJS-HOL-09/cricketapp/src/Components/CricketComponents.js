import React from 'react';

// 1. ListofPlayers component using ES6 map() and arrow functions
export function ListofPlayers({ players }) {
    return (
        <ul>
            {players.map((item, index) => (
                <div key={index}>
                    <li>Mr. {item.name} <span>{item.score}</span></li>
                </div>
            ))}
        </ul>
    );
}

// Helper component to filter and display players with scores <= 70
export function Scorebelow70({ players }) {
    const players70 = [];
    
    // Using map with conditional pushing as dictated by the assignment prompt
    players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return item;
    });

    return (
        <ul>
            {players70.map((item, index) => (
                <div key={index}>
                    <li>Mr. {item.name} <span>{item.score}</span></li>
                </div>
            ))}
        </ul>
    );
}

// 2. OddPlayers component using ES6 Array Destructuring in the parameter signature
export function OddPlayers([first,, third,, fifth]) {
    return (
        <div>
            <li>First : {first} </li>
            <li>Third : {third} </li>
            <li>Fifth : {fifth}</li>
        </div>
    );
}

// EvenPlayers component matching the screenshot pattern
export function EvenPlayers([, second,, fourth,, sixth]) {
    return (
        <div>
            <li>Second : {second} </li>
            <li>Fourth : {fourth} </li>
            <li>Sixth : {sixth}</li>
        </div>
    );
}

// 3. ListofIndianPlayers component to render the merged team arrays
export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <ul>
            {IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </ul>
    );
}