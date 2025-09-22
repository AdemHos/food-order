import React from 'react'

const Input = () => {
  return (
    <div className='w-full'>
      <label className='relative block'>
        <input type="text" className='h-14 w-full border border-primary outline-none px-4 peer
        ' />
        <span className='absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7
        peer-focus:text-xs peer-valid:text-sm transition-all'>Email</span>
      </label>
    </div>
  )
}

export default Input
