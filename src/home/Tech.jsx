
import { DiAndroid, DiDart, DiDocker, DiGit, DiJavascript, DiPython, DiSqllite } from 'react-icons/di'

const Tech = () => {
  return (
    <div className='space-y-3'>
      <div>
        <h1>Technology User I</h1>
      </div>
      <div className='grid grid-cols-4 place-item-center gap-5'>
        <DiAndroid className='hover:scale-100 hover:text-pink-500 cursor-pointer transition-all duration -500' size={150} />
        <DiJavascript size={150} />
        <DiPython size={150} />
        <DiDart size={150} />
        <DiGit size={150} />
        <DiDocker size={150} />
        <DiSqllite size={150} />


      </div>
      <div className="grid grid-cols-4 place-items-center">
        <div className="bg-gray-500">
          <h1>box1</h1>
        </div>
        <div className="bg-gray-400">
          <h1>box1</h1>
        </div>
        <div className="bg-gray-600">
          <h1>box1</h1>
        </div>
        <div className="bg-gray-300">
          <h1>box1</h1>
        </div>
      </div>
    </div>
  )
}

export default Tech