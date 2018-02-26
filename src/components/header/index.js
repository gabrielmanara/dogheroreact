import React, { Component } from 'react';
import SimpleLineIcon from 'react-simple-line-icons';
import './header.css'


class Header extends Component {

    render() {

        return (
            <header className="l-header">
                <h1>A dogs app</h1>
                <div onClick={this.props.handleClick} className="filter-button">
                    {this.props.filterState ? <SimpleLineIcon name="close" /> : <SimpleLineIcon name="settings" />}   
                </div>
            </header>
        )
    }
}


export default Header;