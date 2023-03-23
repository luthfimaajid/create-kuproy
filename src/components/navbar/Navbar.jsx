import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredPosts, setIsHoveredPosts] = useState(false);
  const [isHoveredCreate, setIsHoveredCreate] = useState(false);
  const [isClickedHome, setIsClickedHome] = useState(false);
  const [isClickedPosts, setIsClickedPosts] = useState(false);
  const [isClickedCreate, setIsClickedCreate] = useState(false);

  // Search Hover
  const handleMouseOverSearch = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveSearch = () => {
    setIsHovered(false);
  };

  //Home Hover
  const handleMouseOverHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseLeaveHome = () => {
    setIsHoveredHome(false);
  };

  //Posts Hover
  const handleMouseOverPosts = () => {
    setIsHoveredPosts(true);
  };

  const handleMouseLeavePosts = () => {
    setIsHoveredPosts(false);
  };

  //Create Hover
  const handleMouseOverCreate = () => {
    setIsHoveredCreate(true);
  };

  const handleMouseLeaveCreate = () => {
    setIsHoveredCreate(false);
  };

  //Home Clicked
  const handleClickHome = () => {
    setIsClickedHome(true); 
  };

  //Posts Clicked
  const handleClickPosts = () => {
    setIsClickedPosts(true); 
  };

  //Create Clicked
  const handleClickCreate = () => {
    setIsClickedCreate(true); 
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsClickedHome(true);
    } else if (window.location.pathname === "/posts"){
      setIsClickedPosts(true);
    } else if (window.location.pathname === "/create-post"){
      setIsClickedCreate(true);
    }
  }, []);


  return (
    
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={`${process.env.PUBLIC_URL}/assets/logo_kuproy.svg`} alt="Logo" className="h-12  mr-10" />
        <ul className="flex ">
        <li className={`ml-10 mr-10 rounded-40 ${isClickedHome ? 'bg-custom-orange-1 text-white' : 'bg-custom-gray-3 text-custom-gray-2 hover:bg-custom-orange-1'} hover:drop-shadow-xl items-center`}>  
          <a href="/" id="home" onMouseOver={handleMouseOverHome} onMouseLeave={handleMouseLeaveHome} onClick={handleClickHome} className="font-quicksand font-medium  hover:text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
          <img 
              src={`${isClickedHome ? process.env.PUBLIC_URL+'/assets/home_icon_active.svg' : (isHoveredHome ? process.env.PUBLIC_URL+'/assets/home_icon_active.svg' : process.env.PUBLIC_URL+'/assets/home_icon.svg')}`} 
              alt="Home_icon" 
              className="pr-3" 
            /> 
                Home
            </a>
          </li>

          <li className={`ml-10 mr-10 rounded-40 ${isClickedPosts ? 'bg-custom-orange-1 text-white' : 'bg-custom-gray-3 text-custom-gray-2 hover:bg-custom-orange-1'} hover:drop-shadow-xl items-center`}>
            <a href="/posts" onMouseOver={handleMouseOverPosts} onMouseLeave={handleMouseLeavePosts} onClick={handleClickPosts} className="font-quicksand font-medium hover:text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img 
              src={`${isClickedPosts ? process.env.PUBLIC_URL+'/assets/posts_icon_active.svg' : (isHoveredPosts ? process.env.PUBLIC_URL+'/assets/posts_icon_active.svg' : process.env.PUBLIC_URL+'/assets/posts_icon.svg')}`} 
              alt="Posts_icon" 
              className="pr-3" /> 
                Posts
            </a>
          </li>

          <li className={`ml-10 mr-10 rounded-40 ${isClickedCreate ? 'bg-custom-orange-1 text-white' : 'bg-custom-gray-3 text-custom-gray-2 hover:bg-custom-orange-1'} hover:drop-shadow-xl items-center`}>
          <a href="/create-post" onMouseOver={handleMouseOverCreate} onMouseLeave={handleMouseLeaveCreate} onClick={handleClickCreate} className="font-quicksand font-medium hover:text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img 
              src={`${isClickedCreate ? process.env.PUBLIC_URL+'/assets/create_icon_active.svg' : (isHoveredCreate ? process.env.PUBLIC_URL+'/assets/create_icon_active.svg' : process.env.PUBLIC_URL+'/assets/create_icon.svg')}`} 
              alt="Create_icon" 
              className="pr-3" 
            /> 
                Create
            </a>
          </li>

        </ul>
      </div>
      <div className="relative flex items-center">
        <input 
            type="text" 
            placeholder="          Search..." 
            className="font-montserrat font-regular px-2 py-1 rounded-40 bg-white-100 border border-black text-white mr-40"  
            onMouseOver={handleMouseOverSearch}
            onMouseLeave={handleMouseLeaveSearch}
        />
        {isHovered && (
          <div className="absolute left-0 top-10 text-rose-700 font-montserrat text-xs items-center flex">
            <img src={`${process.env.PUBLIC_URL}/assets/warning_icon.svg`} alt="warning_icon" className="pr-3" />
            This feature is not available now!
          </div>
        )}
        <img 
            src={`${process.env.PUBLIC_URL}/assets/search_icon.svg`} 
            alt="Search_icon" 
            className="absolute left-4"
        />
      </div>
    </nav>
  );
};