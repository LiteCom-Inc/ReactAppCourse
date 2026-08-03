import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const name = "Lighton";
   const x = 15;
   const y = 24;
   const names = ['Peter', 'Mike', 'John', 'Maria'];
   const loggedIn = true;

   if(loggedIn){
    return <h1 className=''>Hello {name}</h1>;
   }

  return (
    <>
      <div className='text-5xl'>All is well</div>
      <p>Hello {}</p>
      <p>
        The sum of {x} and {y} is {x+y}
      </p>
      <ul>
        
      </ul>
    </>
  )
}

export default App
