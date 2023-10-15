import React, { MouseEvent } from "react"


interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
  items: string[]
  onClickItem: (item: string, e: MouseEvent) => void
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <ul className="divide-y divide-gray-100 border-solid border-blue-300 border-2 rounded-l">
      {props.items.map((item) => (
        <li
          key={item}
          className="flex justify-between gap-x-6 py-5 hover:bg-blue-100"
          onClick={(e) => props.onClickItem(item, e)}
        >
          <span className="px-2">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default ListItem
