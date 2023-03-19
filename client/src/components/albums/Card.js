import React from 'react'
import { IoMdPlay } from 'react-icons/io';
import "./Singer.css";


const Card = () => {
  return (
    <div>
      <div>   
      <div className="card-image">
        <div className="card-header">Mr Natvarlal</div>
        <div className="card-footer">
          <span>Artist Name</span>           

        <button>
            <IoMdPlay/> 
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
