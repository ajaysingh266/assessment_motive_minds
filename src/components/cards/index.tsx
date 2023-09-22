import React from 'react';
import "./index.scss";
const Card = (props:{img:string, className?:string}) => {
    return (
        <div className={"card-container"}>
            <img src={props.img} alt={"image"} className={props.className? props.className : "card-image" }/>
        </div>
    );
};

export default Card;