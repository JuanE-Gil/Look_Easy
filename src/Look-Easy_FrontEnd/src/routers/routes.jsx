import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Peliculas/Peliculas';
import { Series } from '../pages/Series/Series';
import { Estrenos } from '../pages/Estrenos/Estrenos';
import FormularioToggle from '../pages/FormularioToggle/FormularioToggle';
import Buscador from '../pages/Buscador/Buscador';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { SerieDetails } from '../pages/SeriesDetails/SeriesDetails';
import PreciosContainer from '../pages/Plans/PreciosContainer';
import PaymentsContainer from '../pages/PaymentsContainer/PaymentsContainer';
import RecoverPassword from '../pages/RecoverPassword/RecoverPassword';
import Login from '../Auth/Login/Login';
import Registrarse from '../Auth/Registro/Registration';

/*export function MyRoutes() {*/

export const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/singup' element={<Registrarse />} />
                <Route exact path='/' element={<Home />} />
                <Route path='/form' element={<FormularioToggle />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/plans' element={<PreciosContainer />} />
                <Route path='/payments' element={<PaymentsContainer />} />
                <Route path='/estrenos' element={<Estrenos />} />
                <Route path='/buscador' element={<Buscador />} />
                <Route path='/recover-password' element={<RecoverPassword />} />
                <Route
                    exact
                    path='/movies/:movieId'
                    element={<MovieDetails />}
                />
                <Route
                    exact
                    path='/serie/:serieId'
                    element={<SerieDetails />}
                />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    );
};