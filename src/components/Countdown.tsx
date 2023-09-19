import React from 'react';
import './Navbar';

interface ICountdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountDownTimer = ({ days=0, hours = 0, minutes = 0, seconds = 60 }: ICountdown) => {
    

    const [time, setTime] = React.useState<ICountdown>({days, hours, minutes, seconds});
    

    const tick = () => {

        if (time.days ===0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0)
            reset()
            else if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                setTime({ days: time.days - 1, hours: 23, minutes: 59, seconds: 59 });
            } else if (time.minutes === 0 && time.seconds === 0) {
                setTime({ days: time.days, hours: time.hours - 1, minutes: 59, seconds: 59 });
            } else if (time.seconds === 0) {
                setTime({ days: time.days, hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
            } else {
                setTime({ days: time.days, hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1 });
            }
            };


    const reset = () => setTime({days: time.days, hours: time.hours, minutes: time.minutes, seconds: time.seconds});

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
            <div className='wrapper' style={{padding: '80px', backgroundColor: '#1c1777'}}>
            <center>
            <h1  style={{fontSize: '50px',backgroundColor: '#1c1777', color: 'white',}}>Time until SIH:</h1>
            <div className='custom-fontsize' style={{backgroundColor: '#1c1777'}}>{`${time.days.toString().padStart(2, '0')}:${time.hours.toString().padStart(2, '0')}:${time.minutes
        .toString()
        .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</div>
            <h2  style={{backgroundColor: '#1c1777', color: 'white',}}>Set yourself tight for the most awaited Hackathon!</h2>
            </center>
        </div>
        
    );
}

export default CountDownTimer;