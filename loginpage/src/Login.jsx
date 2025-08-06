import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const correctUsername = 'admin';
    const correctPassword = '1234';

    if (username === correctUsername && password === correctPassword) {
      setMessage(' Login successful!');
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '10px',
    textAlign: 'center'
  },
  form: {
    display: 'inline-block',
    flexDirection: 'column'
  },
  input: {
    display: 'block',
    padding: '10px 20px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    color: 'white',
  }
};

export default Login;