import { useState } from 'react'

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('')

  function HandleSubmit(e) {
    e.preventDefault()

    if (!description) return

    const newItem = { description, completed: false, id: Date.now() }

    onAddItems(newItem)

    setDescription('')
  }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>Name your tasks and cross them off one by one as you go!🙂</h3>

      <input
        type="text"
        placeholder="What are the tasks for today?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
