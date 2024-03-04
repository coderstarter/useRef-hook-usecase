import React, {useEffect, useRef} from 'react';

function App() {
  const count = useRef(0);
  console.log(count.current);
  useEffect(() => {
    const timer = setInterval(() => {
      count.current += 1;
      console.log(count.current);
    }, 1000);

    return () => clearInterval(timer);

  }, []);
  return (
    <div className='App'>
      Timer Component {count.current}
    </div>
  );
}

export default App;
