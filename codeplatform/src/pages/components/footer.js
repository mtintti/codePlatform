import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='grid grid-cols-2 bg-neutral-700 py-10 px-10'>
            <div className='grid grid-rows-3 max-w-3xl justify-center items-center'>
                <Link href="/">
                    <p className='text-neutral-400 hover:text-neutral-500'>Home</p>
                </Link>
                <Link href="/questions">
                    <p className='text-neutral-400 hover:text-neutral-500'>Questions</p>
                </Link>
                <Link href="/profile">
                    <p className='text-neutral-400 hover:text-neutral-500'>Profile</p>
                </Link>
            </div>
        </div>
    )
}
