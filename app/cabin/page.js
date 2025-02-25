import React from 'react'
import Navigation from '../component/Navigation'
import { list } from 'postcss';

async function page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);


    return (
        <div>
            <h1>Here we can get to know cabins</h1>
            <ul>
                {data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default page