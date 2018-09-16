import React, { Component } from 'react'
import AddContact from './AddContact'
import axios from 'axios'

var contacts = []

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { contacts }

    this.handleAddContact = this.handleAddContact.bind(this)
  }

  componentDidMount () {
    axios
      .get('/contacts')
      .then(res =>
        res.data.contacts.map(contact => ({
          name: `${contact.name}`,
          email: `${contact.email}`,
          phone: `${contact.phone}`,
          address: `${contact.address}`,
          city: `${contact.city}`,
          state: `${contact.state}`,
          zipcode: `${contact.zipcode}`
        }))
      )
      .then(contacts => {
        this.setState({
          contacts
        })
      })
  }

  handleRemoveContact (index) {
    this.setState({
      contacts: this.state.contacts.filter(function (e, i) {
        return i !== index
      })
    })
  }

  handleAddContact (contact) {
    this.setState({
      contacts: [
        ...this.state.contacts,
        contact
      ]
    })
  }

  render () {
    return (
      <div className='container'>
        <AddContact onAddContact={this.handleAddContact} />
        <i className='fas fa-address-book fa-2x' /><h2 className='mb-4 pb-2 pl-4 d-inline-block'>Contacts</h2>
        <ul className='list-group'>
          { this.state.contacts.map((contact, index) =>
            <li className='list-group-item' key={index}>
              <h4><i className='fas fa-user' />&nbsp;&nbsp;{contact.name}</h4>
              <p>
                <a href={'mailto:' + contact.email}>{contact.email}</a> <br />
                {contact.phone}                                                                                                                                                                                                            <br />
                {contact.address}                                                                                                                                                                                                          <br />
                {contact.city}, {contact.state} {contact.zipcode}
              </p>
              <button className='btn btn-danger btn-sm' onClick={this.handleRemoveContact.bind(this, index)}><i className='fas fa-trash-alt' />&nbsp;&nbsp;Delete Contact</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App
