import { Link } from 'react-router-dom';
export const Info = () => {
   
    // Exibição da apresentação
    return (
        <div className='container'>
            <h1>tela De Apresentação Do Hackathon</h1>
            
               <Link to="/home" className='btn btn-primary'>Sistema</Link>
             
        </div>
    );

}
