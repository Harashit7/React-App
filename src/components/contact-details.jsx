import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContact } from '../actions/contacts-action';
// connect the application to redux store 

class ContactDetails extends Component {
    componentDidMount() {
        this.props.getContact(this.props.match.params.id);
        console.log('**************************************' )
        console.log(this.props.contacts);
    }



    
    render() {
           let contact=this.props.contacts;
           console.log(contact)
           // console.log(this.props.match.params.id);
        return (
            <div className="card">
        <div className="row">
          
            <div className="col-md-4">
                <img src={contact.picture} alt={contact.name} className="card-img"
                    style={{ width: "120px", height: "120px" }} />
            </div>
            <div className="col-md-7">
                <div className="card-body">
                    <h4 className="card-title">
                        
                        {contact.gender ==='Male'?"Mr. " :"Ms/Mrs. "} {contact.name}
                    
                    </h4>
                    <h4 className="card-text">{contact.email}</h4>
                    <h4 className="card-text">{contact.phone}</h4>
                    
               

                </div>
            </div>
        </div>
    </div>
        );
    }
}
 

let stateAsProps = (reducer) => {
    return {
        contacts: reducer.contactsReducer.contacts
    }
}
let actionAsProps = {
    getContact: getContact
};

export default connect(stateAsProps, actionAsProps)(ContactDetails);