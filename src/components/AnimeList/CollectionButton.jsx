"use client"

import { useState } from "react"

const CollectionButton = ({ mal_id, email }) => {
  const [isCreated, setIsCreated] = useState(false)
  const handleCollection = async (event) => {
    event.preventDefault()
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify({ mal_id, email }),
    })

    const data = await response.json()
    if (data.status == 200) {
      setIsCreated(data.isCreated)
    }
  }

  return (
    <>
      {isCreated ? (
        <p>Berhasil ditambahkan</p>
      ) : (
        <button onClick={handleCollection} className="px-2 py-1 bg-slate-600">
          Add to Collection
        </button>
      )}
    </>
  )
}

export default CollectionButton
