import * as C from './styles';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    price: number;
    item: any
}

export const ComicInfoItem = ({ title, thumbnail, price, item }: Props) => {

    // Váriavel para montar caminho da imagem
    let img = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
    // Exibição de dados do quadrinho selecionado
    return (
        <C.Container>
            <C.ContainerItem>
                <img src={`${img}`} alt="Thumbnail HQ" />
            </C.ContainerItem>
            <C.ContainerItem>
                <h1>{title}</h1>
                <p>Disponibilidade: Em falta</p>
                <p>R$ {price}</p>
            </C.ContainerItem>
        </C.Container>
    );
}