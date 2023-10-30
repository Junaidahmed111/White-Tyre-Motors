import React from 'react'
import gif from"@/public/assets/gif.gif"
import Image from 'next/image'

const Gif = () => {
  return (
    <div className='flex justify-center items-center mb-6'>
<Image src={gif} alt='gif' width={700} height={250} className='w-[70%]'/>
    </div>
  )
}

export default Gif