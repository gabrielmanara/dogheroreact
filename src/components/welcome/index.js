import React, { Component } from 'react'
import './welcome.css'


class Welcome extends Component {
    render() {
        return(
            <div className="welcome-message">
                <h3 className="welcome-message__title">Welcome to DogHeroFinder</h3>
                <h4 className="welcome-message__subtitle">Where Pets Find Their People</h4>
            </div>
        )
    }
}

export default Welcome;
