import React, { Component } from 'react';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

// new import
import { connect } from 'react-redux';

class Persons extends Component {

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
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
        onAddPerson: (name, age) => {
            return dispatch({ type: actionTypes.ADD_PERSON, personData: {name: name, age: age}})
        },
        onRemovePerson: (id) => {
            return dispatch({ type: actionTypes.REMOVE_PERSON, personId: id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);