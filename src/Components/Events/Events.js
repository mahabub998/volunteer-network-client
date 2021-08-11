import React from 'react';


const Events = ({event}) => {

    return (
        <div className="col-md-3">
            <img style={{height:'300px'}} src={event.img} alt="" ></img>
        <h3>{event.name}</h3>
            </div>
    );
};

export default Events;