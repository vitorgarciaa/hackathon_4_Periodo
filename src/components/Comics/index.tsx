import * as C from './styles';
import { Link } from 'react-router-dom';
import { useContext } from "react";

type Props = {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    price: number;
    raro: boolean;
    item: {}
}

export const Comics = ({ id, title, thumbnail, price, raro, item }: Props) => {

    // Váriavel para montar caminho da imagem.
    let img = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
    // Deixar titulo em maisculo
    let titleUpper = title.toUpperCase();
    // Exibição dos quadrinhos
    return (
        <C.Container>
            <C.ContainerComicImg>
                <Link to={`/hq/${id}`}><img src={`${img}`} alt="Thumbnail HQ" /></Link>
            </C.ContainerComicImg>
            <C.ContainerComicTitle>
                <p>{titleUpper}</p>
            </C.ContainerComicTitle>
            <C.ContainerComicButton>
                <p>R$ {price}</p>
            </C.ContainerComicButton>
        </C.Container>
    );
}