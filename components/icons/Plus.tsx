<<<<<<< HEAD
import React from "react"

const Plus = () => {
=======
import { FC } from "react"

interface PlusProps {
  width?: string
  height?: string
  stroke?: string
}

const Plus: FC<PlusProps> = (props: any) => {
>>>>>>> 69945b4c316a3fb3c832d71af92917397fad6bf6
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1.16663V12.8333M1.16667 6.99996H12.8333"
        stroke={props.stroke}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

<<<<<<< HEAD
=======
Plus.defaultProps = {
  width: "24",
  height: "24",
  stroke: "#FFFFFF",
}

>>>>>>> 69945b4c316a3fb3c832d71af92917397fad6bf6
export default Plus
