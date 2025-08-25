// декларативный
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createElement,Fragment } from 'react' 


// императивный
function App() {
  const [count, setCount] = useState(0)
  const year = new Date().getFullYear();

  return (
    // императивный
    createElement(Fragment,null,
      createElement('div',null, 
      createElement('a',{href:"https://vite.dev",target:"_black"},createElement('img',{className:"logo",alt:"Vite logo",src:viteLogo})),
      createElement('a',{href:"https://react.dev",target:"_black"},createElement('img',{className:"logo react",alt:"logo react",src:reactLogo}))
      ),
      createElement('h1',null,'Vite + React'),
      createElement('div',{className:"card"},
        'npm', 
        createElement('button',{onClick:() => setCount((count) => count + 1)},`count is ${count}`),
        createElement('p',null,' Edit ', createElement('code',null,'src/App.jsx'),' and save to test HMR')
      ),
      createElement('p',{className:"read-the-docs"},'Click on the Vite and React logos to learn more'),
      createElement('div',null,year)
    )
  )
}

export default App
