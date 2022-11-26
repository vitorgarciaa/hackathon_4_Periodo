import * as C from './styles';
import { Link } from 'react-router-dom';


export const Header = ({ children }: any) => {

    // Exibição do Header
    return (
        <C.Header>
            <C.HeaderItem>
                <Link to="/"><img src="../assets/img/marvel-comics-logo.png" alt="Logo Marvel Comics" /></Link>
            </C.HeaderItem>
            <C.HeaderItem>
                <nav>
                    <ul>
                      <p className='h1'>Hackathon</p> 
                    </ul>
                </nav>
            </C.HeaderItem>
        </C.Header>
    );
}