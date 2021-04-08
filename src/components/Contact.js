import React from 'react';
import './Contact.css';

const name = "Elmer Lee";
const online= false;
function Contact() {
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/men/31.jpg" alt={name} className="avatar" />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <img src="" alt="" className="status-online"/>
                    <span className=".status-text">{online? 'online' : 'offline'}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Contact
