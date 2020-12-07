import React, {useState, useEffect} from 'react';
import ButtonRow from "./ButtonRow";
import Map from "./Map";
import Today from './Today';
import useGlobalState from "./GlobalContext";
import {initialState} from "../reducers/businessReducer";

/**
 * core application wrapper
 * @param props
 * @returns {*}
 * @constructor
 */
const Main = (props) => {
    const [state, dispatch] = useGlobalState();

    const checkDate = (e) => {
        let date = e.target.textContent;
        let opened = [];

        state.businesses.map(business => {
            if(business.openDates.includes(date)){
                opened.push(business);
            }
        });

        dispatch({
            type: "UPDATE",
            payload: {
                ...state,
                mapData: {
                    ...state.mapData,
                    markers: opened
                }
            }
        });
    };

    const allOpenDates = [];
    for(let key in initialState.businesses) {
        if(initialState.businesses.hasOwnProperty(key)){
            let business = initialState.businesses[key];
            business.openDates.forEach(date => {
                if(allOpenDates.indexOf(date) === -1){
                    allOpenDates.push(date);
                }
            });
        }
    }

    useEffect(e => {
        console.log(console.log(state))
    }, [state.mapData.markers]);

    return (
        <>
            <Today />
            <ButtonRow buttons={allOpenDates} onClick={checkDate}/>
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </>
    )
};

export default Main;
