'use client'
import React, { useState } from 'react'

const Page = () => {

  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState('')

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-zinc-900 p-4'>
        <form
          className='flex gap-x-2'
          onSubmit={async (e) => {
            setLoading(true);
            e.preventDefault()
            console.log(prompt)
            const response = await fetch('/api/generate', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                prompt
              }),
            });
            const data = await response.json()
            setImage(data.url)
            setLoading(false);
          }}
        >
          <input type="text" placeholder='write your promt'
            onChange={(e) => setPrompt(e.target.value)}
            className='bg-zinc-950 text-white px-3 py-2 my-2 flex-grow'
            value={prompt}
          />
          <button
            className='bg-sky-950 text-white px-3 py-2 my-2 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={loading}
          >
            {
              loading ? 'Loading' : 'Generate Image'
            }
          </button>

        </form>

        {
          image && (
            <img src={image} alt="Generated Image" />
          )
        }
      </div>
    </div>
  )
}

export default Page