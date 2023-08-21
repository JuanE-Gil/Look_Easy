import { React } from 'react';
import "./Precios.css"
const Precios = ({ title, price, resolution, quality, devices, link }) => {
    return (
        <div className='tabla'>
            <h4>{title}</h4>
            <div className='precio'>
                <span className='dolar'>S/</span>
                <span className='numero'>{price}</span>
                <span className='mes'>/mes</span>
            </div>
            <div className='caracteristicas'>
                <ul className='list'>
                    <strong>Resolución:</strong>
                    <li>
                        <span>{resolution}</span>
                    </li>
                    <strong>Calidad:</strong>
                    <li>
                        <span>{quality}</span>
                    </li>
                    <strong>Dispositivos Compatibles:</strong>
                    <li>
                        <span>{devices}</span>
                    </li>
                </ul>
            </div>
            <a href={link} className='link'>Seleccionar</a>
        </div>
    );
};

export default Precios;
