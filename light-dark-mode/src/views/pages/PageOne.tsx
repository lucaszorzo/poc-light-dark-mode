import { useState } from 'react';
import {ThemeToggleButton} from 'bm-design-system';
import { Link } from 'react-router-dom';

const PageOne = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <ThemeToggleButton />
      <h1>Page One</h1>
      <input
        type="text"
        id="input-text01"
        placeholder="Digite algo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Você digitou: {text}</p>
      <br />
      <Link to="/page-two">Ir para Page Two</Link>
    </div>
  );
};

export default PageOne;
