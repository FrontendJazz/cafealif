import React from 'react';
import './contacts.css'



const Contacts = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.125244011232!2d-87.68897908456617!3d41.997587579212855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1c2dc8db613%3A0xb25ce5bf80bd2f3e!2s2245%20W%20Devon%20Ave%2C%20Chicago%2C%20IL%2060659!5e0!3m2!1sen!2sus!4v1603369435017!5m2!1sen!2sus"
                width="100%" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false"
                tabIndex="0"/>
<div className="findus">
    <h2 className="findus__title"><span>Our</span>location</h2>
    <div className="findus__contacts">
        <strong> Café Alif </strong><br/>
        2539 W Devon Ave, Chicago, IL 60659
    </div>
</div>
        </div>
    );
};

export default Contacts;