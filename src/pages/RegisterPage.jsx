import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"

const RegisterPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

      console.log("註冊成功", userCredential.user)

      alert("註冊成功")
    } catch (error) {
      console.log(error)

      alert(error.message)
    }
  }

  return (
    <div className="max-w-md mx-auto pt-32">
      <h1 className="text-3xl font-bold mb-6">
        註冊
      </h1>

      <form
        onSubmit={handleRegister}
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
          註冊
        </button>
      </form>
    </div>
  )
}

export default RegisterPage