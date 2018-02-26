import React, { Component } from 'react'
import './no-results.css'


class NoResults extends Component {
    render() {
        return (
            <div className="no-results">
                <span className="no-results__icon"> =( </span>
                <p className="no-results__text">Unfortunately we don't have any pets with these characteristics</p>
            </div>
        )
    }
}

export default NoResults;
