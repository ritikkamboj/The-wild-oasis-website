import React from 'react'
import Navigation from '../component/Navigation'
import { list } from 'postcss';
import Counter from '../component/Counter';

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
            <Counter data={data} />
        </div>
    )
}

export default page