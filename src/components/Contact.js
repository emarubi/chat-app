import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            online: props.online,
        }
    }

    render() {
        return (
            <div className="Contact">
            <img src={this.props.avatar} alt={this.props.name} className="avatar" />
            <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status">
                    <span className={this.state.online? "status-online" : "status-offline" }/>
                    <span className=".status-text">{this.state.online? 'online' : 'offline'}</span>
                </div>
            </div>
        </div> 
        )
    }
}

// function Contact(props) {
//     return (
//         <div className="Contact">
//             <img src={props.avatar} alt={props.name} className="avatar" />
//             <div>
//                 <h4 className="name">{props.name}</h4>
//                 <div className="status">
//                     <span className={props.online? "status-online" : "status-offline" }/>
//                     <span className=".status-text">{props.online? 'online' : 'offline'}</span>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool
}

export default Contact;
