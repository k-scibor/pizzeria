import React from 'react';
import "./Pizza.css";
const Pizza = (props) => (
    <>
        <div className="pizza">
            {Object.keys(props.nazwa).map(
                (e) => (<div key={e} className={e}>
                    {props.nazwa[e]}
                </div>)
            ) }
        </div>
    </>
)

export default Pizza;