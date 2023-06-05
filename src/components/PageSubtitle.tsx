import React from 'react';

export default function PageSubtitle(props:any) {
    return (
        <div className='text-white bg-gradient-to-r h-[60vh] from-cyan-500 to-blue-500 flex flex-col justify-between mb-24'>
            <div className='flex flex-col gap-2 mt-32 p-5 items-center'>
                <h1 className='font-bold text-6xl'>{props.title}</h1>
                <p className='font-bold text-lg'>{props.subtitle}</p>
            </div>
        </div>
    );
};

