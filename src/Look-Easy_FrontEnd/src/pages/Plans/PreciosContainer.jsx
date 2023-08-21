import { React } from 'react';
import Precios from '../../components/Precios/Precios';
import './Precios.css';
const PreciosContainer = () => {
    return (
        <div className='preciosContainer'>
            <section id='pricing'>
                <Precios
                    title='Silver'
                    price='0.00'
                    resolution='360p'
                    quality='Normal'
                    devices='TV, Computadoras'
                    link='/home'
                />
                <Precios
                    title='Gold'
                    price='15.00'
                    resolution='720p (HD)'
                    quality='Buena'
                    devices='TV, Computadoras, Teléfonos'
                    link='/login/payments'
                />
                <Precios
                    title='Platinum'
                    price='20.00'
                    resolution='1080p (HD)'
                    quality='Muy Buena'
                    devices='TV, Computadoras, Teléfonos, tablets'
                    link='/login/payments'
                />
            </section>
        </div>
    );
};

export default PreciosContainer;
