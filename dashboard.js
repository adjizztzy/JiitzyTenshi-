export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard Bot Control</h1>
      <ul>
        <li><a href="/send">Kirim Pesan</a></li>
        <li><a href="/repeat">Kirim Ulang</a></li>
        <li><a href="/doxing">Doxing</a></li>
        <li><a href="/ai">AI Chat</a></li>
      </ul>
    </div>
  );
}