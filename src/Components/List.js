import React from 'react';


function list(props) {
    return (
        <div>
            <h1>FirstName ==> {props.item.name.first}</h1>
            <h2>LastName ==>{props.item.name.last}</h2>
            <h3>Balance ==>  {props.item.balance}</h3>

            <p>About ==> {props.item.about}</p>

        </div>
    )

}

export default list;