import { Juegos } from "./Juegos";

export interface Tema{
    idTema?: number,
    tema: string,
    idJuegos?: Juegos | number,
}