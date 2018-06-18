import React, { Component } from 'react';
import AddContact from './AddContact'

var contacts = [
  {
    name: 'Noel Honeybourne',
    email: 'noel@awesome.com',
    phone: '832-578-9202',
    address: '5609 Riverside Dr',
    city: 'Houston',
    state: 'TX',
    zipcode: '77006'
  },
  {
    name: 'Beth Kirby',
    email: 'beth33@hotmail.com',
    phone: '916-984-8404',
    address: '303 Woodland Terrace',
    city: 'Folsom',
    state: 'CA',
    zipcode: '95630'
  },
  {
    name: 'Brian Smith',
    email: 'briansmith@gmail.com',
    phone: '405-478-3541',
    address: '4483 Benson Park Drive',
    city: 'Oklahoma City',
    state: 'OK',
    zipcode: '73131'
  },
  {
    name: 'Dianne Minor',
    email: 'dminor90@gmail.com',
    phone: '559-532-7160',
    address: '4483 Benson Park Drive',
    city: 'Fresno',
    state: 'CA',
    zipcode: '93721'
  }
]


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { contacts }

    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleRemoveContact(index) {
    this.setState({
      contacts: this.state.contacts.filter(function (e, i) {
        return i !== index
      })
    });
  }

  handleAddContact(contact) {
    this.setState({
      contacts: [
        ...this.state.contacts,
        contact
      ]
    })
  }

  render() {
    return (
      <div className="container">
        <AddContact onAddContact={this.handleAddContact}></AddContact>
        <i className="fas fa-address-book fa-2x"></i><h2 className="mb-4 pb-2 pl-4 d-inline-block">Contacts</h2>
        <ul className="list-group">
          { this.state.contacts.map((contact, index) =>
            <li className="list-group-item" key={index}>
              <h4><i className="fas fa-user"></i>&nbsp;&nbsp;{contact.name}</h4>
              <p>
                <a href={"mailto:" + contact.email}>{contact.email}</a> <br/>
                {contact.phone}    <br/>
                {contact.address}  <br/>
                {contact.city}, {contact.state} {contact.zipcode}
              </p>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveContact.bind(this, index)}><i className="fas fa-trash-alt"></i>&nbsp;&nbsp;Delete Contact</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App
