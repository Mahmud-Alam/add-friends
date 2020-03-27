import React from 'react';
import './ChatList.css'

const ChatList = (props) => {
    const {first,last} =props.removedPeople.name;
    return (
        <div className="chat-list">
            <ul>
                <li> {first} {last}</li>
            </ul>
        </div>
    );
};

export default ChatList;