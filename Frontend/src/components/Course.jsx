import React from 'react';
import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4">
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you {""}
            <span className='text-pink-500'>
              there!
            </span>
          </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugiat quia molestias inventore possimus fugit officia voluptates placeat? Voluptas ullam voluptatibus, aspernatur iure fugiat reiciendis eveniet nisi quae nobis aperiam.</p>
          <Link to='/'>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6 cursor-pointer'>Back</button>
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12'>
          {
          list.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
        }
        </div>
      </div>
    </>
  )
}

export default Course