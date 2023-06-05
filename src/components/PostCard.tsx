import Link from 'next/link';
import React from 'react';

export default function PostCard() {
    const handleClick = () => {
        window.location.href = '/post';
    };
    return (
        <div className='flex flex-col gap-1 mb-4 w-96 cursor-pointer' onClick={handleClick}>
            <div className='flex justify-center'>
                <img src='img_1.jpg' className='h-80 w-96 justify-self-auto' alt='Post' />
            </div>
            <p className='text-gray-500 text-sm'>December 13, 2019 • By Admin</p>
            <h2 className='text-xl font-bold'>Chrome now alerts you when someone steals your password</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
            <a href='#' className='text-blue-500'>Read more</a>
        </div>
    );
}
