import { FC } from 'react'

interface MoneyProps {
  width?: string
  height?: string
  stroke?: string
}

const Money: FC<MoneyProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7M9 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V11C21 10.4696 20.7893 9.96086 20.4142 9.58579C20.0391 9.21071 19.5304 9 19 9H9C8.46957 9 7.96086 9.21071 7.58579 9.58579C7.21071 9.96086 7 10.4696 7 11V17C7 17.5304 7.21071 18.0391 7.58579 18.4142C7.96086 18.7893 8.46957 19 9 19ZM16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16C13.4696 16 12.9609 15.7893 12.5858 15.4142C12.2107 15.0391 12 14.5304 12 14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14Z"
        stroke={props.stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

Money.defaultProps = {
  width: '24',
  height: '24',
  stroke: '#82868C',
}

export default Money
