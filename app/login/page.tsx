'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:8081/v1/auth/login', {
        user: {
          username,
          password,
        },
      }, {
        withCredentials: true, // 세션 쿠키 포함
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log('로그인 성공:', response.data)
      alert('로그인 성공!')
      router.push('/')
    } catch (err) {
      console.error(err)
      setError('로그인에 실패했습니다.')
    }
  }

  return (
    <form onSubmit={handleLogin} className="p-4 flex flex-col gap-2 max-w-md mx-auto">
      <input
        type="text"
        value={username}
        placeholder="아이디"
        onChange={(e) => setUsername(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <input
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        로그인
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
