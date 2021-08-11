import React from 'react';


const Events = ({event}) => {
    const deleteEvent = id =>{

    }

    return (
        <div className="col-md-3">
            <img style={{height:'300px'}} src={event.imageUrl} alt="" ></img>
        <h3>{event.name}<button onClick={()=>deleteEvent(event._id)}>Delete</button></h3>
            </div>
    );
};

export default Events;