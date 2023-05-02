import { useState } from 'react'

export default function Home() {
  const [hobby, setHobby] = useState('')
  const [subject, setSubject] = useState('')
  const [course, setCourse] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // handle form submission here
  }

  return (
    <div>
      <h1>My Website</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What is your favorite hobby?
          <input type="text" value={hobby} onChange={(event) => setHobby(event.target.value)} />
        </label>
        <label>
          What is your favorite subject?
          <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} />
        </label>
        <label>
          What is your favorite course?
          <input type="text" value={course} onChange={(event) => setCourse(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}