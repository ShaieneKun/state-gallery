import { useState } from 'react';

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(isSent);
        setIsSent(true);
    }

    if (isSent) {
        return <h2>Thank you!</h2>;
    } else {
        return (
            <form onSubmit={e => {
                handleSubmit(e)
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}
