import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleInputChange(e) {
    e.preventDefault()
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    })
  }

  render() {
  	return (
      <div className="pt-2 pb-4">
    		<i className="fas fa-pencil-alt fa-2x"></i><h2 className="mb-4 mt-4 pl-4 d-inline-block">New Contact</h2>
    		<form className="mt-4 mb-4" onSubmit={this.handleSubmit}>
  			<div className="form-group row">
  				<label htmlFor="inputName" className="col-sm-1 control-label">Name</label>
  				<div className="col-sm-11">
  					<input name="name" type=	"text" className="form-control" id="inputName" autoComplete="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" required />
  				</div>
  			</div>
  			<div className="form-group row">
  				<label htmlFor="inputEmail" className="col-sm-1 control-label">Email</label>
  				<div className="col-sm-11">
  					<input name="email" type="text" className="form-control" id="inputEmail" autoComplete="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" required />
  				</div>
  			</div>
        <div className="form-group row">
  				<label htmlFor="inputPhone" className="col-sm-1 control-label">Phone</label>
  				<div className="col-sm-11 ">
  					<input name="phone" type="text" className="form-control" id="inputPhone" autoComplete="phone" value={this.state.phone} onChange={this.handleInputChange} placeholder="Phone" required />
  				</div>
  			</div>
        <div className="form-row mb-3">
  				<label htmlFor="inputAddress" className="col-sm-1 control-label">Address</label>
  				<div className="col-sm-11">
  					<input name="address" type="text" className="form-control" id="inputAddress" autoComplete="address" value={this.state.address} onChange={this.handleInputChange} placeholder="Address" required />
  				</div>
  			</div>
        <div className="form-row mb-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="inputCity">City</label>
            <input name="city" type="text" className="form-control" id="inputCity" autoComplete="city" value={this.state.city} onChange={this.handleInputChange} placeholder="City" required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="inputState">State</label>
            <input name="state" type="text" className="form-control" id="inputState" autoComplete="state" alue={this.state.state} onChange={this.handleInputChange} placeholder="State" required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="inputZipcode">Zip</label>
            <input name="zipcode" type="text" className="form-control" id="inputZipcode" autoComplete="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} placeholder="Zipcode" required />
          </div>
        </div>
  			<div className="form-group row">
  				<div className="col-sm-offset-2 col-sm-10">
  					<button type="submit" className="btn btn-success">Add Contact</button>
  				</div>
  			</div>
        </form>
				<hr className="horiz-style" />
      </div>
    )
  }
}

export default AddContact
