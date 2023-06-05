"use client"
import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import Banner from '@/components/Banner';
import PostCard from '@/components/PostCard';

export default function Contact() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const totalPosts = 10; // Exemplo: suponha que existam 10 postagens no total

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Array.from({ length: totalPosts }, (_, index) => index + 1)
        .slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const handleClick = (page: any) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Banner title="Notícias" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <div className='bg-black flex justify-center items-center mt-16'>
                <div className='flex justify-center items-center flex-wrap gap-5 -mx-4 bg-white'>
                    {currentPosts.map((post) => (
                        <PostCard key={post} />
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        className={`px-3 py-2 mx-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-black'
                            }`}
                        onClick={() => handleClick(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </>
    );
}
