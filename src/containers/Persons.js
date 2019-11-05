import React, { Component } from 'react';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

// new import
import { connect } from 'react-redux';

class Persons extends Component {
    // state not needed here. in the reducer
    // state = {
    //     persons: []
    // }

    // logic moved to the reducer
    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor(Math.random() * 40)
    //     }
    //     this.setState((prevState) => {
    //         return { persons: prevState.persons.concat(newPerson) }
    //     });
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState((prevState) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId) }
    //     });
    // }

    render() {
        return (
            <div>
                {/* <AddPerson personAdded={this.personAddedHandler} /> */}
                <AddPerson personAdded={this.props.onAddPerson} />
                {/* {this.state.persons.map(person => ( */}
                {this.props.personsArray.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovePerson(person.id)} />
                ))}
            </div>
        );
    }
}

// connect is function that returns a high-order componentbundleRenderer.
// pass the slice of state (or store) this component uses as props and the actions used

const mapStateToProps = state => {
    return {
        personsArray: state.persons
    }
}
// dispatch actions
// anonymous function to execute when action taken
const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => {
            return dispatch({ type: actionTypes.ADD_PERSON })
        },
        onRemovePerson: (id) => {
            return dispatch({ type: actionTypes.REMOVE_PERSON, personId: id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);