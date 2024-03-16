import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleChange = (e) => {
        setValue(e.target.value);

        isTyping(props, chatId);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if(text.length > 0) {
            sendMessage(creds, chatId, { text });
        }

        setValue('');
    }
    
    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    className="message-input"
                    placeholder="Send a message..."
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </form>
        </div>
    )
}

export default MessageForm;