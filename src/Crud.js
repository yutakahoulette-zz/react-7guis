import React, { Component } from 'react'

const uuid = () => String(Math.random()).split('.')[1]

class Crud extends Component {
  state = {
    editing: false,
    persons: [],
    error: '',
    filter: '',
    person: {}
  }

  create = (ev) => {
    ev.preventDefault()
    if (!this.validPerson()) return
    const person = this.state.person
    person.id = uuid()
    const persons = this.state.persons
    this.setState({
      persons: persons.concat([person]),
      error: '',
      person: {},
    })
  }

  update = (ev) => {
    ev.preventDefault()
    if (!this.validPerson()) return
    this.setState({
      editing: false,
      person: {}
    })
  }

  delete = (id) => (ev) => {
    let {index, persons} = this.getPersonsAndIndex(id)
    persons.splice(index, 1)
    this.setState({
      persons,
      editing: false,
      person: {}
    })
  }

  validPerson = () => {
    const isValid = Boolean(this.state.person.lastName.trim()) && 
      Boolean(this.state.person.firstName.trim())
    if(!isValid) {
      this.setState({
        error: 'Person must contain a first and last name'
      })
    }
    return isValid
  }

  getPersonsAndIndex = (id) => {
    let persons = this.state.persons
    let index = persons.findIndex((p) => p.id === id)
    return {index, persons}
  }

  setPerson = (id) => (ev) => {
    let person = this.state.person
    person[id] = ev.target.value
    this.setState({person})
  }

  setEditing = (id) => () => {
    let {index, persons} = this.getPersonsAndIndex(id)
    let person = persons[index]
    this.setState({
      person,
      editing: true
    })
  }

  setFilter = (ev) => {
    const filter = ev.target.value.trim().toLowerCase()
    this.setState({filter})
  }

  render() {
    const firstName = this.state.person.firstName || ''
    const lastName = this.state.person.lastName || ''
    return (
      <section>
        <h2>CRUD</h2>
        {this.state.persons.length 
          ?
            <div>
              <label>Filter</label>
              <input onChange={this.setFilter} value={this.state.filter} type='text'/>
            </div>
          : ''
        }
        <form onSubmit={this.state.editing ? this.update : this.create}>
          <label>First name</label>
          <input onChange={this.setPerson('firstName')} value={firstName} type='text'/>
          <br/>
          <label>Last name</label>
          <input onChange={this.setPerson('lastName')} value={lastName} type='text'/>
          <br/>
          <button>{this.state.editing ? 'Update' : 'Create'}</button>
        </form>
        {this.state.error ? <p>{this.state.error}</p> : ''}
        <ul>
          {this.state.persons.map(({id, firstName, lastName}) => 
            <li key={id} style={{color: this.state.filter === lastName.toLowerCase() ? 'tomato' : 'black'}} >
              {lastName}, {firstName}
              <button onClick={this.setEditing(id)}>Edit</button>
              <button onClick={this.delete(id)}>Delete</button>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default Crud

