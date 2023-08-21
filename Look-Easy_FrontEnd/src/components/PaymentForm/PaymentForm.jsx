import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expirationMonth, setExpirationMonth] = useState('');
    const [expirationYear, setExpirationYear] = useState('');
    const [cvv, setCVV] = useState('');

    const handleCardNumberInput = (e) => {
        let inputCardNumber = e.target.value.replace(/\s/g, '');
        inputCardNumber = inputCardNumber
            .replace(/\D/g, '')
            .replace(/(\d{4})(?=\d)/g, '$1 ');
        setCardNumber(inputCardNumber);
    };

    const handleCardHolderInput = (e) => {
        setCardHolder(e.target.value);
    };

    const handleMonthInput = (e) => {
        setExpirationMonth(e.target.value);
    };

    const handleYearInput = (e) => {
        setExpirationYear(e.target.value);
    };

    const handleCVVInput = (e) => {
        setCVV(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !/^\d{16}$/.test(cardNumber) ||
            !/^[a-zA-Z\s]+$/.test(cardHolder) ||
            !/^\d{2}$/.test(expirationMonth) ||
            !/^\d{4}$/.test(expirationYear) ||
            !/^\d{3,4}$/.test(cvv)
        ) {
            alert('Por favor, verifica que todos los campos sean válidos.');
            return;
        }

        // Redireccionar si los datos son correctos
        window.location.href = '/';

        // Mostrar alerta de registro exitoso
        alert('¡Registro exitoso! ¡Gracias por registrarte!');
    };

    return (
        <form className='paymentContainer' onSubmit={handleSubmit}>
            <div className='card-container'>
                <div className='front'>
                    <div>
                        <div className='image'>
                            <img src='/img/chip.png' alt />
                            <img src='/img/visa_2.png' alt />
                        </div>
                        <div className='card-number-box'>
                            #### #### #### ####
                        </div>
                        <div className='flexbox'>
                            <div className='box'>
                                <span>card holder</span>
                                <div className='card-holder-name'>
                                    NOMBRE DEL TITULAR
                                </div>
                            </div>
                            <div className='box'>
                                <span>expiracion</span>
                                <div className='expiration'>
                                    <span className='exp-month'>mm</span>
                                    <span className='exp-year'>yy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contenido de la parte frontal de la tarjeta */}
                </div>
                <div className='back'>
                    <div>
                        <div className='stripe' />
                        <div className='box'>
                            <span>cvv</span>
                            <div className='cvv-box' />
                            <img src='/img/visa_2.png' alt />
                        </div>
                    </div>

                    {/* Contenido de la parte trasera de la tarjeta */}
                </div>
            </div>
            <div className='inputBox'>
                <span>Número de Tarjeta</span>
                <input
                    type='text'
                    maxLength='19'
                    className='card-number-input'
                    value={cardNumber}
                    onChange={handleCardNumberInput}
                />
            </div>
            <div className='inputBox'>
                <span>Nombre del Titular</span>
                <input
                    type='text'
                    className='card-holder-input'
                    value={cardHolder}
                    onChange={handleCardHolderInput}
                />
            </div>
            <div className='flexbox'>
                <div className='inputBox'>
                    <span>Mes de Expiración</span>
                    <select
                        name='month'
                        id=''
                        className='month-input'
                        value={expirationMonth}
                        onChange={handleMonthInput}>
                        <option value='month' selected disabled>
                            mes
                        </option>
                        <option value='01'>01</option>
                        <option value='02'>02</option>
                        <option value='03'>03</option>
                        <option value='04'>04</option>
                        <option value='05'>05</option>
                        <option value='06'>06</option>
                        <option value='07'>07</option>
                        <option value='08'>08</option>
                        <option value='09'>09</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        {/* Opciones para el mes */}
                    </select>
                </div>
                <div className='inputBox'>
                    <span>Año de Expiración</span>
                    <select
                        name='year'
                        id=''
                        className='year-input'
                        value={expirationYear}
                        onChange={handleYearInput}>
                        <option value='year' selected disabled>
                            año
                        </option>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029'>2029</option>
                        <option value='2030'>2030</option>
                        {/* Opciones para el año */}
                    </select>
                </div>
                <div className='inputBox'>
                    <span>CVV</span>
                    <input
                        type='text'
                        maxLength='4'
                        className='cvv-input'
                        value={cvv}
                        onChange={handleCVVInput}
                    />
                </div>
            </div>
            <input type='submit' value='Registrarse' className='submit-btn' />
        </form>
    );
};

export default PaymentForm;
