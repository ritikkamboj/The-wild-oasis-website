import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

function Navigation() {
    return (
        <div>

            <ul>
                <li><Link href="/about">To ABout</Link></li>
                <li><Link href="/account">To account</Link></li>
                <li><Link href="/cabin">To cabin</Link></li>
                <li><Link href="/">Homet</Link></li>
            </ul>
        </div>

    )
}

export default Navigation