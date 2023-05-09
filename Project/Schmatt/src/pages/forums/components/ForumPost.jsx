import React from 'react'

const ForumPost = ({key, message, selectedForum}) => {
  return (
    <div>
        <div className="w-full h-auto bg-forum-background border-border-color border rounded-md flex flex-col gap-4">
            <div className='flex justify-between h-10 w-full'>
                <p>{selectedForum}</p>
                <p>Posted by (user)</p>
            </div>
            <div className='flex flex-col items-center gap-10 px-24 pb-10'>
                {/* <p >{message.name}</p> */}
                <h1 className=' text-3xl'>IVER ER KUL</h1>
                
                {/* <p>{message.text}</p> */}
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, quod. Maiores, unde dignissimos facere, doloribus, officiis laborum reprehenderit voluptatibus accusamus incidunt beatae minima? Eveniet iure debitis eos architecto minus labore.</p>
                {/* <p className={style.timestamp}>{formattedTime}</p> */}
            </div>
            
        </div>
    </div>
  )
}

export default ForumPost