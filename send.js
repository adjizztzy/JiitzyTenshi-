import { useState } from 'react';

export default function SendPage() {
  const [token, setToken] = useState('');
  const [chatId, setChatId] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const sendMessage = async () => {
    const res = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, chatId, message })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Kirim Pesan ke Telegram</h2>
      <input placeholder="Token Bot" onChange={e => setToken(e.target.value)} /><br />
      <input placeholder="Chat ID" onChange={e => setChatId(e.target.value)} /><br />
      <textarea placeholder="Pesan" onChange={e => setMessage(e.target.value)} /><br />
      <button onClick={sendMessage}>Kirim</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}