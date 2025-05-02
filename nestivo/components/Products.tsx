import React from 'react'
import Card from './Card'
import { Button } from './ui/button'

const Products = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-full h-28 text-center border-[0.1px] flex justify-center items-center'>
        <p className='text-2xl font-[family-name:var(--font-geist-mono)]'>ENJOY OUR FEATURED PRODUCTS</p>
      </div>
      <div className='w-full md:flex items-center grid grid-cols-2 grid-rows-2'>
        <Card img='chair_1' price={4990} name='NATIVE IRON CHAIR'/>
        <Card img='chair_2' price={4699} name='ONYX WOOD CHAIR'/>
        <Card img='chair_3' price={4990} name='NATIVE LIGHT CHAIR'/>
        <Card img='chair_4' price={5900} name='PAOLA WOOD CHAIR'/>
      </div>
      <Button variant={'secondary'} size={'lg'} className='w-full text-center bg-transparent'>SHOP ALL</Button>
    </div>
  )
}

export default Products