import '@styles/App.css';
import { useEffect } from 'react';

function App({ name }: { name: string }) {
  useEffect(() => {
    console.log(name);
  }, [name]);

  return <div className="App">Hello</div>;
}

export default App;
