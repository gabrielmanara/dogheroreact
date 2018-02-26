import React, { Component } from 'react';
import './filter.css';
import Welcome from '../../components/welcome'


class Filter extends Component {

    render() {
        return (
            <div className={this.props.filterState ? 'filter open' : 'filter close'}>
                <Welcome />
                <div>
                    <div className="filter__group">
                        <label htmlFor="category">Select the Category</label>
                        <select onChange={this.props.makeQueryCategory} name="category">
                            <option value="">All</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                    </div>
                    <div className="filter__group">
                        <label htmlFor="size">Select the Size</label>
                        <select onChange={this.props.makeQueryCategory} name="size">
                            <option value="">All</option>
                            <option value="Big">Big</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                        </select>
                    </div>

                    <div className="filter__group">
                        <button onClick={this.props.filterList} className="button">Search</button>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Filter;