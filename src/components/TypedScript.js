import React, { Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
import "../App.css"

 const TypedScript = () => {
    return (
        <div className="typescript">
            <Typed
                strings={['Welcome to my Portfolio.Pages!']}
                typeSpeed={40}
            />
            <br />

            <Typed
                strings={[
                    'View my projects',
                    'Contact Me',
                    'Get an inside look....']}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop >
                <input type="text" />
            </Typed>




        </div>
    )
}
export default TypedScript