import React from 'react'
import spotify from "../../icons/spotify.png" ;
import Home from "../../icons/Home.png";
import search from "../../icons/Search.png"

function Homebar() {
    const exactColorStyle = {
        backgroundColor: '#121212',
      };
    return (
        <div className="w-[24%]  p-2">

            <div style={exactColorStyle} className="flex flex-col rounded-lg p-2">

            <div className="flex flex-row gap-1 p-2 invert text-lg font-bold ">
                <img width="28px" src={spotify} alt="spotify" /> <span className='text-base'>Spotify</span>
            </div >
            <div className="flex flex-row gap-4 p-2 invert  text-lg font-bold ">
                <img width="30px" src={Home} alt="home" /> Home
            </div>
            <div className="flex flex-row gap-4 p-2 invert text-lg font-bold">
                <img width="30px" src={search} alt="search" /> Search
            </div>

        </div></div>
    )
}

export default Homebar