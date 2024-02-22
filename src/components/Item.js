export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.completed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
