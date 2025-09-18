import React from 'react'

const Title = ({children,addClass}) => {
  return (
    <div className={`${addClass} font-mono text-xl  `}>
      {children}
    </div>
  )
}

export default Title
