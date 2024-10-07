import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState('blue')

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center items-center h-full">
        <button
          className="px-4 py-2 m-2 text-white bg-red-500 rounded border-solid border-2 border-black"
          onClick={() => setColor('red')}
        >
          Red
        </button>
        <button
          className="px-4 py-2 m-2 text-white bg-green-500 rounded border-solid border-2 border-black"
          onClick={() => setColor('green')}
        >
          Green
        </button>
        <button
          className="px-4 py-2 m-2 text-white bg-blue-500 rounded border-solid border-2 border-black"
          onClick={() => setColor('blue')}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 m-2 text-white bg-orange-500 rounded border-solid border-2 border-black"
          onClick={() => setColor('orange')}
        >
          orange
        </button>
        <button
          className="px-4 py-2 m-2 text-black bg-White-500 rounded border-solid border-2 border-black"
          onClick={() => setColor('White')}
        >
          White
        </button>

        <button
          className="px-4 py-2 m-2 text-black bg-pink-500 rounded border-solid border-2 border-black"
          onClick={() => setColor('Pink')}
        >
              Pink
        </button>
        <button
          className="px-4 py-2 m-2 text-white bg-black-500 rounded bg-black border-solid border-2 border-black"
          onClick={() => setColor('black')}
        >
              Black
        </button>
      </div>
    </div>
  )
}

export default App

