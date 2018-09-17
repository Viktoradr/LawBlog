import { AutorModel } from "./AutorModel";
import { UsuarioModel } from "./UsuarioModel";

export class PostModel {
    id: string;
    Titulo: string;
    Descricao: string;
    Autor: AutorModel = new AutorModel;
    Usuario: UsuarioModel = new UsuarioModel;

    constructor() {}
}