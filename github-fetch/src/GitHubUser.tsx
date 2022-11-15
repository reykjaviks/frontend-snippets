import * as React from "react"
import { useState, useEffect } from "react"

// login is the name of the github user's account
export default function GitHubUser({ login }: { login: string }) {
  const [data, setData] = useState()
  const apiBaseURL = "https://api.github.com/users"

  useEffect(() => {
    if (!login) return

    fetch(apiBaseURL.concat("/").concat(login))
      .then(response => response.json())
      .then(setData)
      .catch(console.error)
  }, [login])

  if (data)
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  return null

}