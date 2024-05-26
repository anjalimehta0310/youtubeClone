import React from 'react'
import { FaHome,FaUser,FaHistory,FaListAlt,FaClock,FaBook,FaTshirt, FaMusic,FaChild,FaVideo, FaGamepad, FaFilm, FaPodcast, FaShoppingCart, FaHotjar, FaCogs, FaLifeRing, FaCommentDots, FaYoutube} from 'react-icons/fa';
import { MdOutlineShortText, MdOutlineLiveTv, MdSports } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-50">
      <ul className="space-y-2">
        <li className="flex items-center gap-2"><FaHome /> Home</li>
        <li className="flex items-center gap-2"><MdOutlineShortText /> Shorts</li>
        <li className="flex items-center gap-2"><MdOutlineLiveTv /> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-2"><FaMusic /> Music</li>
        <li className="flex items-center gap-2"><MdSports /> Sports</li>
        <li className="flex items-center gap-2"><FaGamepad /> Gaming</li>
        <li className="flex items-center gap-2"><FaFilm /> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-2"><FaUser /> Your Channel</li>
        <li className="flex items-center gap-2"><FaHistory /> History</li>
        <li className="flex items-center gap-2"><FaListAlt /> Playlist</li>
        <li className="flex items-center gap-2"><FaClock /> Watch Later</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-2"><FaHotjar /> Trending</li>
        <li className="flex items-center gap-2"><FaShoppingCart /> Shopping</li>
        <li className="flex items-center gap-2"><FaMusic /> Music</li>
        <li className="flex items-center gap-2"><FaFilm /> Movies</li>
        <li className="flex items-center gap-2"><MdSports /> Sports</li>
        <li className="flex items-center gap-2"><FaPodcast /> Podcast</li>
        <li className="flex items-center gap-2"><FaBook /> Courses</li> {/* No appropriate icon found */}
        <li  className="flex items-center gap-2"><FaTshirt/> Fashion & Beauty</li> {/* No appropriate icon found */}
      </ul>
      <h1 className="font-bold pt-5">More From YouTube</h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-2"><FaYoutube /> YouTube Premium</li>
        <li className="flex items-center gap-2"><FaVideo />YouTube Studio</li> 
        <li className="flex items-center gap-2"><FaMusic /> YouTube Music</li>
        <li className="flex items-center gap-2"><FaChild /> YouTube Kids</li>
      </ul>
      <div>
        <ul className="font-bold pt-5 space-y-2 ">
          <li className="flex items-center gap-2"><FaCogs /> Setting</li>
          <li className="flex items-center gap-2"><FaHistory /> Report History</li>
          <li className="flex items-center gap-2"><FaLifeRing /> Help</li>
          <li className="flex items-center gap-2"><FaCommentDots /> Send feedback</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
