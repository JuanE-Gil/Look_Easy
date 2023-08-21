import { useState } from 'react';
import './PaymentsContainer.css';

const PaymentsContainer = () => {
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

    // Validate the credit card number
    const isValidCardNumber = /^\d{16}$|^(3[47][0-9]{13})$/.test(cardNumber);
    if (!isValidCardNumber) {
        alert('Por favor, ingresa un número de tarjeta válido.');
        return;
    }

    // Validate the card holder name
    const isValidCardHolderName = /^[a-zA-Z\s]+$/.test(cardHolder);
    if (!isValidCardHolderName) {
        alert('Por favor, ingresa un nombre de titular de tarjeta válido.');
        return;
    }

    // Validate the expiration month
    const isValidExpirationMonth = /^\d{2}$/.test(expirationMonth);
    if (!isValidExpirationMonth) {
        alert('Por favor, ingresa un mes de expiración válido.');
        return;
    }

    // Validate the expiration year
    const isValidExpirationYear = /^\d{4}$/.test(expirationYear);
    if (!isValidExpirationYear) {
        alert('Por favor, ingresa un año de expiración válido.');
        return;
    }

    // Validate the CVV
    const isValidCVV = /^\d{3,4}$/.test(cvv);
    if (!isValidCVV) {
        alert('Por favor, ingresa un CVV válido.');
        return;
    }

    // Redirect if the data is correct
    window.location.href = '/';

    // Show a success registration alert
    alert('¡Registro exitoso! ¡Gracias por registrarte!');
};


    return (
        <div className='paymentContainer'>
            <div className='card-container'>
                <div className='front'>
                    <div>
                        <div className='image'>
                            <img src='../../assets/img/chip.png' alt='chip' />
                            <img src='../../assets/img/visa_2.png' alt='visa' />
                        </div>
                        <div className='card-number-box'>
                            {cardNumber || '#### #### #### ####'}
                        </div>
                        <div className='flexbox'>
                            <div className='box'>
                                <span>card holder</span>
                                <div className='card-holder-name'>
                                    {cardHolder || 'NOMBRE DEL TITULAR'}
                                </div>
                            </div>
                            <div className='box'>
                                <span>expiración</span>
                                <div className='expiration'>
                                    <span className='exp-month'>
                                        {expirationMonth || 'mm '}
                                    </span>
                                    <span className='exp-year'>
                                        {expirationYear || ' yy'}
                                    </span>
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
                            <div className='cvv-box'>{cvv || 'CVV'}</div>
                        </div>
                    </div>

                    {/* Contenido de la parte trasera de la tarjeta */}
                </div>
            </div>
            <form action='' onSubmit={handleSubmit}>
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
                <input
                    type='submit'
                    value='Registrarse'
                    className='submit-btn'
                />
            </form>
        </div>
    );
};

export default PaymentsContainer;
