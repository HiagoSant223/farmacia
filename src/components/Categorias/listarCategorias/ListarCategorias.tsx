/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import CardCategorias from '../CardCategorias/CardCategorias';
import Categoria from '../../../models/categorias';
import { buscar } from '../../../services/Service';

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  }
  
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  
  return (
    <>
      {categorias.length === 0 ? (
        <Dna
          visible={true}
          height={200}
          width={200}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <>
                   <CardCategorias key={categoria.id} categoria={categoria} />
                </>
              ))} 
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;
