    import { useEffect, useState } from 'react';
import '../CSS/CountDown.css';

    const targetDate = new Date('2023-09-23T00:00:00Z');

    const CountDownTimer = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
        days,
        hours,
        minutes,
        seconds,
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
        clearInterval(timer);
        };
    }, []);

    return (
        <div className='card-glass'>
        <center>
            <div className='custom-fontsize'>{`${timeLeft.days.toString().padStart(2, '0')}:${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes
            .toString()
            .padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}</div>
            <h2>Set yourself tight for the most awaited Hackathon!</h2>
        </center>
        </div>
    );
    }

    export default CountDownTimer;
