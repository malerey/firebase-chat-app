import React, { useState } from 'react';

const CreateChat = ({ createChat, users }) => {
  const [chatName, setChatName] = useState('');
  const [recipient, setRecipient] = useState(users[0]);

  return (
    <form className="panel" onSubmit={(e) => createChat(e, recipient, chatName)}>
      <h3>Create a Chat</h3>
      <p>Enter a name and select a recipient for your chat:</p>
      <input onChange={e => setChatName(e.target.value)} value={chatName} placeholder="Enter a name for your chat!" />
      <select onChange={e => setRecipient(e.target.value)}>
        {users.map((user, i) => (
          <option  key={i} value={user}>{user}</option>
        ))}
      </select>
      <p>
        Create chat with name {chatName} and recipient: {recipient} ?
      </p>
      <button disabled={!chatName || !recipient}>
        Submit
      </button>
    </form>
  );
};

export default CreateChat;
