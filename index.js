import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (user === 'adji' && pass === 'adji') {
      router.push('/dashboard');
    } else {
      alert('Login gagal!');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <style jsx>{`
        .login-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 100px;
        }
        input {
          margin: 5px;
          padding: 10px;
        }
        button {
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
        }
      `}</style>
    </div>
  );
}