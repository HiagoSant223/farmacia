/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/categorias";
import { ChangeEvent, useEffect, useState } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormularioCategoria(){

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
          await buscar(`/categorias/${id}`, setCategoria);

        } catch (error) {
          console.error('Erro ao buscar categorias:', error);
        }
      }

      useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
          ...categoria,
          [e.target.name]: e.target.value
        })
    
        console.log(JSON.stringify(categoria))
      }

      async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
      
        if (id !== undefined) {
          try {
            await atualizar(`/temas`, categoria, setCategoria);
            alert('Tema atualizado com sucesso!');

            retornar()

          } catch (error: any) {
            alert('Erro ao atualizar o Tema');
          }
        } else {
          try {
            await cadastrar(`/temas`, categoria, setCategoria);
            alert('Tema cadastrado com sucesso');

          } catch (error: any) {
            alert('Erro ao cadastrar o Tema');
          }
        }
      
        retornar();
      }

      function retornar() {
        navigate("/categorias")
      }

      return (
        <div className="container flex flex-col items-center justify-center mx-auto">
          <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
          </h1>
    
          <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
            <div className="flex flex-col gap-2">
              <label htmlFor="descricao">Descrição do tema</label>
              <input
                type="text"
                placeholder="Descrição"
                name='descricao'
                className="border-2 border-slate-700 rounded p-2"
                value={categoria.descricao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <button
              className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
              type="submit"
            >
              {id === undefined ? 'Cadastrar' : 'Editar'}
            </button>
          </form>
        </div>
      );
}

export default FormularioCategoria;