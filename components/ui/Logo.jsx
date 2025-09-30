import Link from "next/link"

const Logo = () => {
  return (
    <Link href={'/'} className='text-[2rem] font-mono font-bold italic text-white'>
      <span className='text-primary'>Well</span>Done
    </Link>
  )
}

export default Logo
