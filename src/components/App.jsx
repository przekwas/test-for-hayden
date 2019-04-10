import React from 'react';
import Header from './Header';

let dataArray = [
    {
        id: 1,
        name: 'Hayden',
        role: "student"
    },
    {
        id: 2,
        name: "Luke",
        role: "pro smash melee player"
    },
    {
        id: 3,
        name: "Jon Snow",
        role: "King in the North"
    },
    {
        id: 4,
        name: "Night King",
        role: "Original Stark"
    }
];

const App = () => {
    return (
        <div className="container">
            <div className="row">
                {dataArray.map(obj => {
                     return <Header key={obj.id} person={obj} />
                })}
            </div>
        </div>
    );
}

export default App;