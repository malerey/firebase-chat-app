import React, { useState } from 'react';

const ChatWindow = ({ messages = [], sendMessage, currentChat }) => {
  const [messageBody, setMessageBody] = useState('');
	const sortedMessages = messages.sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf());
	
	const message = () => {
		sendMessage(currentChat, messageBody)
		setMessageBody('')
	}

	return (
		<div className="panel">
			<div className="messages">
				{sortedMessages.map((message, i) => (
					<p key={i}>{message.sender}: {message.body}</p>
				))}
			</div>
			<div className="send-message">
				<textarea value={messageBody} onChange={e => setMessageBody(e.target.value)} className="text-entry" />
				<button className="submit" onClick={message}>Submit</button>
			</div>
		</div>
	);
};

export default ChatWindow;
