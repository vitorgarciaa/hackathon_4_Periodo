import { MainRoutes } from "./routes/MainRoutes";
import * as C from './AppStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header/index";

const App = () => {    
  return (  
      <C.Container>
          <Header>         
          </Header>      
        <div>        
          <MainRoutes />
        </div>
        <div className="card text-center text-bg-danger ">
            <div className="card-body">
              <blockquote className="blockquote mb-0 ">
                <footer className="blockquote-footer h1 mt-2">Todos os direitos reservados.  <cite title="Source Title">©2022 HACKATHON</cite></footer>
              </blockquote>
            </div>
       </div>
      </C.Container>

  );
}

export default App;