import React from 'react'

const Header = () => {
  const lists=[
    {
    "id":1,
"title":"Home"
  },
  {"id":2,
    "title":"Blog"
  },
    {
    "id":3,
"title":"About me"
  },
    {
    "id":4,
"title":"Contact us"
  },
]
  return (
    <div >
          <header className=' w-full  grid   grid-cols-3 grid-rows-1 h-12 justify-center justify-items-center fixed z-20  '>
        <div className="font-bold">Gaurav😎</div>
        <ul className="p-0 m-0 flex justify-center gap-5 font-medium">
             {lists.map(({title},index)=>(
                        <li key={index} >{title} </li>
          ))}
        </ul>
        <div>
            <svg className="w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    </header>
     
    </div>
  )
}

export default Header
