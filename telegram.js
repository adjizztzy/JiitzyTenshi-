export default async function handler(req, res) {
  const { token, chatId, message } = req.body;

  if (!token || !chatId || !message) {
    return res.status(400).json({ error: 'Parameter kurang' });
  }

  const send = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  const result = await send.json();
  res.status(200).json(result);
}