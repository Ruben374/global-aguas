"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário
        console.log('Formulário enviado!');
        // Limpar os campos do formulário
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    return (
        <div>
            <h2 className="text-2xl font-bold mb-5">Formulário De Contactos</h2>
            <span className='text-lg text-gray-400 mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestias deleniti vitae
            </span>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 "
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block mb-2 font-medium">
                        Assunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-2 border border-gray-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 font-medium">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border border-gray-300"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
