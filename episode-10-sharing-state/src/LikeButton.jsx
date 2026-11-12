function LikeButton({ likes, onLike }) {
  return (
    <button onClick={onLike}>
      Like ({likes})
    </button>
  )
}

export default LikeButton
