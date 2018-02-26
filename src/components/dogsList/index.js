import React, { Component } from 'react';
import './dog.css'

class dogsList extends Component {

    render() {
        return (
            <div className="dog">
                <div className="dog__photo" style={{ backgroundImage: `url(${this.props.dog.photo})` }}>
                    <span className="dog__category">{this.props.dog.category}</span>
                </div>
                <div className="dog__info">
                    <div className="dog__name">
                        {this.props.dog.name}
                    </div>
                    <div className="dog__type">
                        {this.props.dog.breed}
                    </div>
                    <div className="dog__about">
                        <span className="dog__badge">Intelligent</span>
                        <span className="dog__badge">Friendly</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default dogsList;