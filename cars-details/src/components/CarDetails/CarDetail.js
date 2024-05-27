import React, { useState } from 'react'
import CarFullDetail from './CarFullDetail';
import Footer from '../Footer';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  return (
      <p className="text">
          {isReadMore ? text.slice(0, 100) : text}
          <span
              onClick={toggleReadMore}
              className="read-or-hide font-bold text-[#00afa0]"
            
          >
              {isReadMore ? "...read more" : " show less"}
          </span>
      </p>
  );
};
const CarDetail=()=> {
  return (

    <div className='w-full sm:w-3/4 m-auto h-full pt-14  '>
     
      <div className='p-3' > <h2 className='pb-2 font-bold'> Car full CarDetail</h2>
      <ReadMore>
      The price of Maruti Swift, a 5 seater Hatchback, ranges from Rs. 6.49 - 9.64 Lakh. It is available in 11 variants, with an engine of 1197 cc and a choice of 2 transmissions: Manual and Automatic. Swift comes with 6 airbags. Maruti Swift has a ground clearance of 163 mm and is available in 9 colours. Users have reported a mileage of 24.8 to 25.75 kmpl for Swift
      </ReadMore>
      </div>
      <div className='flex    rounded-xl border-2 items-center  mt-2'>
        <div className=' flex flex-wrap gap-2 w-full h-auto p-5'>
          <div className='w-96'>
            <img className='w-96  object-cover rounded-xl' src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80" alt='title' />
            <div className='flex gap-2 h-20  overflow-x-auto no-scrollbar  items-center'>
              <img className='w-12 sm:w-20 border-2 rounded-xl object-cover ' src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80" alt='title' />
              <img className='w-12 sm:w-20 border-2 rounded-xl object-cover ' src="data:image/jpeg;base64,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" alt='title' />
              <img className='w-12 sm:w-20 border-2 rounded-xl object-cover ' src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80" alt='title' />
              <img className='w-12 sm:w-20 border-2 rounded-xl object-cover ' src="data:image/jpeg;base64,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" alt='title' />
              <img className='w-12 sm:w-20 border-2 rounded-xl object-cover ' src="data:image/jpeg;base64,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" alt='title' />
              <img className='w-12 sm:w-20 border-2 rounded-xl object-cover ' src="data:image/jpeg;base64,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" alt='title' />
            </div>
          </div>
          <div className='absolute  m-2 rounded-md p-1 bg-yellow-500'><p>feature</p> </div>
          <div className=' p-2 h-full '>
            <h2 className='font-bold text-xl bold'>
              Swift
            </h2>
            text</div>
        </div>

      </div>
      <CarFullDetail/>
      <CarFullDetail/>
    </div>
  
  )
}

export default CarDetail
