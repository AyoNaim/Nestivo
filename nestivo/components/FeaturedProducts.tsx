import React from 'react'
import Card from './Card'
import { Button } from './ui/button'
import LookCard from './LookCard'
import DisplayCard from './DisplayCard'

const FeaturedProducts = () => {
  return (
    <div className='mt-72 md:mt-0 w-screen h-auto flex flex-col justify-center items-center'>
      <div className='w-full h-28 text-center border-[0.1px] flex justify-center items-center'>
        <p className='text-2xl font-[family-name:var(--font-geist-mono)]'>ENJOY OUR FEATURED PRODUCTS</p>
      </div>
      <div className='w-full grid place-items-center md:grid-cols-4 grid-cols-2 grid-rows-2'>
        <DisplayCard img='chair_3' price={4990} name='NATIVE LIGHT CHAIR' className='w-11/12' />
        <DisplayCard img='chair_4' price={5900} name='PAOLA WOOD CHAIR'  />
        <DisplayCard img='chair_1' price={4990} name='NATIVE IRON CHAIR' />
        <DisplayCard img='chair_2' price={4699} name='ONYX WOOD CHAIR'/>
        <DisplayCard img='chair_3' price={4990} name='NATIVE LIGHT CHAIR'/>
        <DisplayCard img='chair_4' price={5900} name='PAOLA WOOD CHAIR'/>
        <DisplayCard img='chair_2' price={4699} name='ONYX WOOD CHAIR'/>
        <DisplayCard img='chair_3' price={4990} name='NATIVE LIGHT CHAIR'/>
      </div>
      <Button variant={'secondary'} size={'lg'} className='w-full text-center bg-transparent border-[0.1px] border-l-0 border-r-0'>SHOP ALL</Button>
    </div>
  )
}

export default FeaturedProducts