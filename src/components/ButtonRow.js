import React from 'react';

/**
 * creates a row of buttons from array of button names
 * @param {Object} props
 * @param {Array} props.buttons - array of buttons to create
 * @returns {string|*}
 * @constructor
 */
const ButtonRow = (props)=> {

    const noEvent = (e) => { console.log(`No event bound for button: ${e.target.textContent}`) };
    const onClick = props.onClick || noEvent;

    if(props.buttons){
        return props.buttons.map(button => {
            return <button
                onClick={onClick}
                className="button"
                key={button}>{button}</button>
        });
    }else{
        return "No button context provider for button row";
    }
};

export default ButtonRow;