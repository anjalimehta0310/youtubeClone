import React from 'react'
import Button from './Button'
const list =["All","Soccer","News","Songs",
"Mixes","Cokking","valentine","Programming","css50","gaming",
"Love","Live","cricket","javascript","Dsa"
]
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
     
    </div>
  )
}

export default ButtonList