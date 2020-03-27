import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faEnvelope,faPhoneAlt, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons';
import './PeopleList.css';

const PeopleList = (props) => {
    const {email,phone}=props.people;
    const {first,last} =props.people.name;
    const {state,country} =props.people.location;
    const {large} = props.people.picture;
    return (
        <div className="friend-box">
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
                    ()=>props.handleAddPeople(props.people)}>
                        <FontAwesomeIcon icon={faUserPlus}/> Add Friend</button>
            </div>
        </div>
    );
};

export default PeopleList;