import React from 'react'

const OutgoingMessage = ({name, avatar, message}) => {
  return (
    <div className="mb-4 flex cursor-pointer justify-end">
        <div className="flex max-w-96 gap-3 rounded-lg bg-indigo-500 p-3 text-white">
          <p>{message}</p>
        </div>
        <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full">
          <img src={avatar} alt={name} className="h-8 w-8 rounded-full" />
        </div>
      </div>
  )
}

export default OutgoingMessage