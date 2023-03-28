<<<<<<< HEAD
import React from "react"

const Magnifier = () => {
=======
import { FC } from "react"

interface MagnifierProps {
  width?: string
  height?: string
  stroke?: string
}

const Magnifier: FC<MagnifierProps> = (props: any) => {
>>>>>>> 69945b4c316a3fb3c832d71af92917397fad6bf6
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
        stroke={props.stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

<<<<<<< HEAD
=======
Magnifier.defaultProps = {
  width: "18",
  height: "18",
  stroke: "#667085",
}

>>>>>>> 69945b4c316a3fb3c832d71af92917397fad6bf6
export default Magnifier
