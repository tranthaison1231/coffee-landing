import { useEffect, useRef, useState } from 'react'
import { Button } from './components/Button'
import CircleProgress from './components/CircleProgress'
import { padNumber } from './utils/number'

const TIME_OUT = 5 * 60

export default function App() {
  const interval = useRef<ReturnType<typeof setInterval>>()
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setTime(time => time + 1)
      }, 1000)
    }

    return () => {
      clearInterval(interval.current)
    }
  }, [isRunning])


  const count = TIME_OUT - time
  const m = Math.floor((count % 3600) / 60)
  const s = count % 60

  function start() {
    setIsRunning(true)
  }

  function stop() {
    setIsRunning(false)
  }

  function reset() {
    stop()
    setTime(0)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-center font-poppins text-3xl text-primary">
      <div className="mb-10 inline-flex items-center justify-center">
        <CircleProgress percent={time / TIME_OUT} text={`${padNumber(m)} : ${padNumber(s)}`} />
      </div>

      <div className="space-x-3">
        <Button variant="primary" onClick={start}>
          Start
        </Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}
