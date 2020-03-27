import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneAlt, faGlobe, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import './FriendList.css'

const FriendList = (props) => {
    // console.log(props.removedPeople);
    const {email,phone}=props.removedPeople;
    const {first,last} =props.removedPeople.name;
    const {state,country} =props.removedPeople.location;
    const {large} = props.removedPeople.picture;
    return (
        <div className="friend-box friend-box2">
            <div className='profile-pic'>
                <img src={large} alt=""/>
            </div>
            <div className="profile-info" >
                <h2 className="infoText name tooltip"><FontAwesomeIcon className="icon" icon={faHeart}/> {first} {last} <span className="tooltiptext">See Profile</span><FontAwesomeIcon className="icon" icon={faHeart}/></h2>
                <h4 className="infoText"><FontAwesomeIcon icon={faEnvelope}/> {email}</h4>
                <h5 className="infoText"><FontAwesomeIcon icon={faPhoneAlt}/> {phone}</h5>
                <h5 className="infoText"><FontAwesomeIcon icon={faGlobe}/> {state}, {country}</h5>
                <button
                onClick={
                    ()=>props.handleRemovedPeople(props.removedPeople)}>
                        <FontAwesomeIcon icon={faTimes}/> Remove Friend</button>
            </div>
        </div>
    );
};

export default FriendList;