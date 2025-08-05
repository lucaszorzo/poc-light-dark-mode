import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggleButton';
import { Link } from 'react-router-dom';

const PageTwo = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <ThemeToggle />
      <h1>Page Two</h1>
      <input
        type="text"
        id="input-text02"
        placeholder="Digite algo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Você digitou: {text}</p>
      <br />
      <Link to="/">Voltar para Page One</Link>
    </div>
  );
};

export default PageTwo;
