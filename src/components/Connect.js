import React, { useState } from 'react';

const Connect = ({ connect }) => {
    const [username, setUsername] = useState('');
    return (
      <form className="panel" onSubmit={() => connect(username)}>
          <input placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
          <button disabled={!username}>Connect</button>
      </form>
    )
};

export default Connect;
