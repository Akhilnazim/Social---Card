import React from 'react'
import data from './data.json';
import Card from './Card';
import CardHead from './CardHead';

var Data = data;
console.log(data);
function CardMain() {
    return (
        <div className="justify-conten-md-center">
            <CardHead/>
           {data.map(
               (data) => (
                   <Card data={data}/>
               )
           )}
        </div>
    )
}

export default CardMain
