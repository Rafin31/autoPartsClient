import React from 'react';
import { useCountdown } from '../../Hooks/useCountDown';
import CounterExpire from './CounterExpire';
import DateTimeDisplay from './DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {

    return (
        <div className="show-counter">

            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />

        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <CounterExpire />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }




};

export default CountdownTimer;