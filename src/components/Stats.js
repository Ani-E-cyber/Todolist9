export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start adding your tasks of the day and complete them step by step!🚀
        </em>
      </p>
    )
  const numItems = items.length
  const numCompleted = items.filter((item) => item.completed).length
  const percentage = Math.round((numCompleted / numItems) * 100)

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'Great Job! You have completed everything!💪 Time to rest!🙂'
          : `You have ${numItems} tasks on your list and you have already done ${numCompleted} tasks so far. (${percentage}% complete!)`}
      </em>
    </footer>
  )
}
