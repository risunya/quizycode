import './src/styles/global.css';
import React, { useState, useEffect } from 'react';

const App = () => {
    // Состояние для хранения текущего времени
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Функция для обновления текущего времени
    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    };

    // Запускаем таймер при монтировании компонента
    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);

        // Функция очистки таймера при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []); // Пустой массив зависимостей означает, что useEffect будет вызван только при монтировании и размонтировании компонента

    return (
        <>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {currentTime}</h2>
        </>
    );
};

export default App;
