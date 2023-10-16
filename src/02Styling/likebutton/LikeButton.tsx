import Heading from "../../core-components/heading/Heading"
import { useState } from "react"
import HeartinLike from "../../core-components/like/HeartinLike"

const LikeButton = () => {
  const [like, setLike] = useState(false)
  return (
    <div>
      <Heading>React like button</Heading>
      <HeartinLike like={like} onClick={(e) => setLike(!like)} />
    </div>
  )
}

export default LikeButton
