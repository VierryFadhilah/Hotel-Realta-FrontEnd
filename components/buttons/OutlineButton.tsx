import { FC } from "react";

interface Button {
  title: string;
}

const OutlineButton: FC<Button> = (props: any) => {
  return (
    <button className={`px-2 py-2 font-medium text-xs text-[#7743DB] border-[#7743DB] border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-[#7743DB]`}>
      {props.title}
    </button>
  )
}

OutlineButton.defaultProps = {
  title: 'Search'
}

export default OutlineButton;