interface CircleProgress {
  text: string
  percent: number
  size?: number
  strokeWidth?: number
}

export default function CircleProgress({ text, percent = 1, size = 300, strokeWidth = 10 }: CircleProgress) {
  const r = (size - strokeWidth) / 2
  const cx = size / 2
  const cy = size / 2
  const strokeDasharray = Math.PI * r * 2 * percent

  return (
    <svg style={{ width: size, height: size }}>
      <circle
        className="text-gray-400"
        stroke="currentColor"
        stroke-width={strokeWidth}
        r={r}
        cx={cx}
        cy={cy}
        fill="transparent"
      ></circle>
      <circle
        className="text-primary"
        strokeWidth="10"
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={r}
        cx={cx}
        cy={cy}
        strokeDasharray={`${strokeDasharray}, ${2 * Math.PI * r}`}
      />
      <text x={cx} y={cy} className="text-3xl text-primary" text-anchor="middle" alignment-baseline="middle">
        {text}
      </text>
    </svg>
  )
}
