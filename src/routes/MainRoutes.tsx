import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home/index';
import { Info } from '../pages/Info/index';
import { NotFound } from '../pages/NotFound/index';
import { ComicInfo } from '../pages/ComicInfo/index';

// Rotas para navegação e exibição de outros componentes na tela

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Info />},
        { path: '/home', element: <Home />},      
        { path: '/hq/:id', element: <ComicInfo />},   
        { path: '*', element: <NotFound/>}
    ]);
}