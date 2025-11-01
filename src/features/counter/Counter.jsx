import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">Redux Counter</h1>
      <p className="text-3xl font-mono">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">+</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">-</button>
        <button onClick={() => dispatch(reset())} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Reset</button>
      </div>
    </div>
  )
}