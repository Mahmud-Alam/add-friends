import React, { useState, useEffect } from 'react';
import logo from '../../images/plus.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad,faDice,faChessQueen,faTrophy,faHeart, faPuzzlePiece, faFootballBall, faUsers, faSearch, faCog, faCommentAlt, faUsersCog, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import PeopleList from '../PeopleList/PeopleList';
import FriendList from '../FriendList/FriendList';
import ChatList from '../ChatList/ChatList';

const Header = () => {
    const [totalPeople,setPeople] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15')
        .then(res=>res.json())
        .then(data=>setPeople(data.results));
    },[]);
    // console.log(totalPeople)

    const [friends,setFriends] = useState([]);
    const [removedPeople,setRemovedPeople] = useState([]);

    const handleAddPeople = (people)=>{
        const newFriend = [...friends,people];
        setFriends(newFriend);

        const findIndx = totalPeople.findIndex(pep=>pep===people);
        const removedPep = totalPeople.splice(findIndx,1);
        const vRemovedPep = [...removedPeople,removedPep]
        setRemovedPeople(vRemovedPep);


        // console.log(removedPeople);

        // console.log(friends);
        // console.log(people);
        // console.log(totalPeople);
    }
    const handleRemovedPeople  = (people)=>{
        // const newFriend = [...friends,people];
        // setFriends(newFriend);
        // console.log(people);..
        console.log(people);
        const findIndx = friends.findIndex(pep=>pep===people);
        console.log(findIndx)
        const removedPep = friends.splice(findIndx,1);
        setRemovedPeople(removedPep)
        console.log(removedPep)
        console.log(friends)
        console.log(removedPeople)

        // setRemovedPeople(removedPep);
        // const vRemovedPep = [...friends,removedPep]
        // setRemovedPeople(vRemovedPep);
    }


    return (
        <div>
            <div className="menuBar">
                <img src={logo} alt=""/>
                <h3>BadhanBook</h3>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/message">Message(0)</a>
                    <a href="/friends">Friends({friends.length})</a>
                    <a href="/notification">Notification(0)</a>
                    <a href="/notification">Suggested People({totalPeople.length})</a>
                    <FontAwesomeIcon className="barIcon" icon={faBars}/>
                </nav>
            </div>
            <div className="container">
                <div className="people-container">
                    <h2 className="text">People you may know({totalPeople.length})</h2><hr/>
                        {
                            totalPeople.map(people=>
                            <PeopleList
                            handleAddPeople={handleAddPeople} 
                            people={people}
                            ></PeopleList>)
                        }
                </div>
                <div className="friend-container">
                    <h2 className="text">Added Friends({friends.length})</h2><hr/>
                        {
                            friends.map(removedPeople=>
                            <FriendList
                            handleAddPeople={handleAddPeople}
                            handleRemovedPeople={handleRemovedPeople} 
                            removedPeople={removedPeople}
                            ></FriendList>)
                        }
                </div>
                <div className="side-container">
                    <h5 className="side-text" ><FontAwesomeIcon icon={faGamepad}/> Games</h5><hr/>
                    <h3><FontAwesomeIcon icon={faFootballBall}/> Football</h3>
                    <h3><FontAwesomeIcon icon={faChessQueen}/>Chess</h3>
                    <h3><FontAwesomeIcon icon={faHeart}/> Card Game</h3>
                    <h3><FontAwesomeIcon icon={faDice}/> Ludu Star</h3>
                    <h3><FontAwesomeIcon icon={faTrophy}/> Fight Club</h3>
                    <h3><FontAwesomeIcon icon={faPuzzlePiece}/> Puzzle</h3>

                    <h5 className="side-text"><FontAwesomeIcon icon={faUsers}/> Active List({friends.length})</h5><hr/>
                    {
                        friends.map(removedPeople=>
                        <ChatList
                        // handleRemovedPeople={handleRemovedPeople} 
                        removedPeople={removedPeople}
                        ></ChatList>)
                    }
                    <button id="fixedButton"><FontAwesomeIcon icon={faSearch}/> Search <FontAwesomeIcon className="settingIcon" icon={faCog}/> <FontAwesomeIcon icon={faCommentAlt}/> <FontAwesomeIcon icon={faUsersCog}/></button>
                </div>
            </div>
        </div>
    );
};

export default Header;