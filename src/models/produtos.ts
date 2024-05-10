import Categoria from "./categorias";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    laboratorio: string;
    preco: number;
    foto: string;
    categoria: Categoria | null;
}