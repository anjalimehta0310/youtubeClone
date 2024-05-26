import React from 'react'
import { toggleMenu } from '../utilis/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {
    const dispatch = useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
            />
            <a href="/">
                <img
                className="h-8 mx-2 cursor-pointer" 
                alt="youtube"
                src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                />
            </a>
        </div>
        <div class="grid grid-cols-10 px-5">
            <div class="col-span-10 px-25 flex items-center">
                <input class="w-1/2 border rounded-l-full border-gray-400 p-2" 
                type="text" placeholder="Search..."/>
                <button class="px-5 py-2 border text-black border-gray-800 rounded-r-full">🔍</button>
            </div>
        </div>
        <div>
            <img 
            className="h-8 col-span-1"
            alt='user' src='https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'></img>
        </div>
    </div>
  )
}

export default Head