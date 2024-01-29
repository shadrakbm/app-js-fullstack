import "../style/Register.css"

import { useState } from "react"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function register(event) {
    event.preventDefault()

    const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <div>
        <h2>Créer un compte</h2>

        <form onSubmit={register}>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Nom d'utilisateur"
            />  
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Adresse mail"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Mot de passe"
            />
            
            <input type="submit" value="créer"/>
        </form>
    </div>
  )
}
