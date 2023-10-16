import { MouseEvent, PropsWithChildren, useState } from "react"
import Heading from "../core-components/heading/Heading"
import ListItem from "../core-components/list/ListItem"

interface ListGroupProps extends PropsWithChildren {
  items: string[]
  heading: string
  onSelectedItem: (item: string) => void
}

const ListGroup = ({ items, heading, onSelectedItem }: ListGroupProps) => {
  // let items: string[] = []
  // items = ["USA", "KSA", "India", "Australia", "Canada"]
  // useState Hook
  const [selectedItem, setSelectedItem] = useState("")

  const handleClick = (item: string, event: MouseEvent) => {
    console.log(event)
    setSelectedItem(item)
    onSelectedItem(item)
  }
  return (
    <div className="px-5 py-5">
      <Heading>{heading}</Heading>
      {items.length === 0 && <div>No Item found</div>}
      <ListItem
        items={items}
        onClickItem={handleClick}
        activeItem={selectedItem}
      ></ListItem>
    </div>
  )
}

export default ListGroup
