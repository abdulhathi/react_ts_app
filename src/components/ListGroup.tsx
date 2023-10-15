import { MouseEvent } from "react"
import Heading from "../core-components/heading/Heading"
import ListItem from "../core-components/list/ListItem"

const ListGroup = () => {
  let items: string[] = []
  items = ["USA", "KSA", "India", "Australia", "Canada"]

  const handleClick = (item: string, event: MouseEvent) => {
    console.log(event)
  }
  return (
    <div className="px-5 py-5">
      <Heading>ListGroup</Heading>
      {items.length === 0 && <div>No Item found</div>}
      <ListItem items={items} onClickItem={handleClick}></ListItem>
    </div>
  )
}

export default ListGroup
