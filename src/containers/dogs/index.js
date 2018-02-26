import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/header'
import NoResults from '../../components/no-results'
import Filter from '../../components/filter'

import {
    fetchDogs,
} from '../../modules/dogs'

import DogInfo from '../../components/dogsList'

class Dogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            noResults: false,
            searchCategory: '',
            searchSize: '',
            filteredList: this.props.dogsList
        }
    }

    changeFilter = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    makeQueryCategory = (event) => {
        if(event.target.name === 'category') {
            this.setState({
                searchCategory: event.target.value
            });
        }

        if (event.target.name === 'size') {
            this.setState({
                searchSize: event.target.value
            });
        } 

    }
    

    filterList = () => {
        let newList = this.props.dogsList.filter(item => {
            return item.category.includes(this.state.searchCategory)
        })

        newList = newList.filter(item => {
            return item.size.includes(this.state.searchSize)
        })


        if (newList.length < 1) {
            return this.setState({
                filteredList: newList,
                noResults: true
            });
        } 

        this.setState({
            filteredList: newList,
            noResults: false
        });
    }
    
    componentDidMount() {
        this.props.fetchDogs();
    }

    render() {
        return (
            <div>
                <Header handleClick={this.changeFilter} filterState={this.state.isOpen} />
                <Filter 
                    makeQueryCategory={this.makeQueryCategory}
                    filterList={this.filterList} 
                    filterState={this.state.isOpen} />
                <ul>
                    {this.state.filteredList.map(function (dog) {
                        return <DogInfo key={dog.id} dog={dog} />;
                    })}
                </ul>
                {Boolean(this.state.noResults) && (
                    <NoResults />
                )}
                

            </div>
        )
    }
}


const mapStateToProps = state => ({
    dogsList: state.dogs.dogsList,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchDogs,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dogs)