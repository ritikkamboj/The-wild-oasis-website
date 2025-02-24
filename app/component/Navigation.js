import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <ul>
            <li><Link href="/about">To ABout</Link></li>
            <li><Link href="/account">To account</Link></li>
            <li><Link href="/cabin">To cabin</Link></li>
            <li><Link href="/">Homet</Link></li>
        </ul>
    )
}

export default Navigation