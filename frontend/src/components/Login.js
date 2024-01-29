import "../style/Login.css"

import { useState } from "react"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login(event) {
    event.preventDefault()

    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <div>
        <h2>Connexion</h2>

        <form onSubmit={login}> 
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
            
            <input type="submit" value="se connecter"/>
        </form>
    </div>
  )
}
