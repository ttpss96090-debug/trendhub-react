import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )

      console.log("登入成功", userCredential.user)
      alert("登入成功")
    } catch (error) {
      console.log(error)

      alert(error.message)
    }
  }

  return (
    <div className="max-w-md mx-auto pt-32">
      <h1 className="text-3xl font-bold mb-6">
       登入
      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3"
        />

        <button
          className="
            w-full
            bg-red-500
            text-white
            py-3
          "
        >
          登入
        </button>
      </form>
    </div>
  )
}

export default LoginPage