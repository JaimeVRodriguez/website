import MainLayout from '../layout/Layout';
import {createBrowserRouter} from 'react-router-dom';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>
    },
]);
