import React from 'react'

const Title = ({children,addClass}) => {
  return (
    <div className={`${addClass} font-mono   `}>
      {children}
    </div>
  )
}

export default Title
