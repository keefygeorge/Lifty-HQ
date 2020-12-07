import React, {useState, useEffect} from 'react';

const Today = (props) => {
    const [time, setTime] = useState(null);

    useEffect(e => {
        setTimeout(() => {
            setTime(new Date().toISOString());
        }, 10000);
    }, [time]);

    useEffect(() => {
        setTime(new Date().toISOString());
    }, []);

    return (
        <div><label>Today's Date: </label>{time}</div>
    );
};

export default Today;