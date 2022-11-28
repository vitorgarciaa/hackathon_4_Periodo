import { Link } from 'react-router-dom';
export const Info = () => {
   
    // Exibição da apresentação
    return (
        <div className='container'>
            <h1>Bem Vindo!!</h1>



            <h3>Esse sistema serve para venda de HQ's raras da Marvel. Espero que goste do nosso site, fique a vontade!!</h3>

            <div className="list-group">
             <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
            Lista de Funcionalidades
            </a>
             <a href="#" className="list-group-item list-group-item-action">1. Buscar os dados da API</a>
            <a href="#" className="list-group-item list-group-item-action">2. Trazer as imagens das HQ's na tela, e o valor de cada</a>
            <a href="#" className="list-group-item list-group-item-action">3. Trazer as informações sobre as HQ's, trazendo o valor e a disponibilidade </a>
        </div>

        <h3>Clique no botao abaixo para ser redirecionado!</h3>
            
               <Link to="/home" className='btn btn-primary'>Sistema</Link>

             
        </div>
    );

}
