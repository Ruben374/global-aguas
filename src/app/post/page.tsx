import React from 'react';
import Banner from '@/components/Banner';

const Post = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col md:flex-row justify-between px-20 gap-10">
        <div className="md:w-3/3">
          <h1 className="text-4xl font-bold mb-4">Título do Post</h1>
          <div className="flex flex-col md:flex-row">
            <img
              src="/img_1.jpg"
              alt="Imagem do post"
              className="w-48 md:w-1/2 mr-4 mb-4 md:mb-0"
            />
            <img
              src="/img_2.jpg"
              alt="Imagem do post"
              className="w-48 md:w-1/2"
            />
          </div>
          <p className="text-lg mb-4">Conteúdo do post...</p>
        </div>
        <div className="md:w-1/3">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Categorias</h3>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Categoria 1</span> (3)
              </li>
              <li>
                <span className="font-bold">Categoria 2</span> (5)
              </li>
              <li>
                <span className="font-bold">Categoria 3</span> (2)
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Sobre o autor</h3>
            <img
              src="/img_1.jpg"
              alt="Imagem do autor"
              className="w-full mb-2"
            />
            <p className="text-sm">Informações sobre o autor...</p>
          </div>
          <div>
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Leia mais
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
