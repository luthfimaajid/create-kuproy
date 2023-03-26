import { useEffect, useState } from 'react';
import { Navbar as NavbarBoots, Nav, Form, FormControl, Button } from 'react-bootstrap';

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
    <NavbarBoots className='m-0 p-0 d-flex justify-content-between'>
      <NavbarBoots.Brand href="#home">
          <img src={`${process.env.PUBLIC_URL}/assets/logo_kuproy.svg`} alt="Logo" className="" />
      </NavbarBoots.Brand>
      <Nav className="d-flex align-items-center justify-content-center">
          <Nav.Link className={`d-flex rounded-pill py-1 px-3 ${isHoveredHome ? 'bg-custom-orange-1 text-white shadow' : ''} ${isClickedHome ? 'bg-custom-orange-1 text-white' : 'bg-custom-gray-3 font-custom-gray-2'}`} href="/" id="home" onMouseOver={handleMouseOverHome} onMouseLeave={handleMouseLeaveHome} onClick={handleClickHome}>
            <img src={`${isClickedHome ? process.env.PUBLIC_URL+'/assets/home_icon_active.svg' : (isHoveredHome ? process.env.PUBLIC_URL+'/assets/home_icon_active.svg' : process.env.PUBLIC_URL+'/assets/home_icon.svg')}`} alt="Home_icon" />
            <span className='ms-1'>Home</span>
          </Nav.Link>
          <Nav.Link className={`ms-5 d-flex rounded-pill py-1 px-3 ${isHoveredPosts ? 'bg-custom-orange-1 text-white shadow' : ''} ${isClickedPosts ? 'bg-custom-orange-1 text-white' : 'bg-custom-gray-3 text-custom-gray-2'}`} href="/posts" onMouseOver={handleMouseOverPosts} onMouseLeave={handleMouseLeavePosts} onClick={handleClickPosts}>
            <img src={`${isClickedPosts ? process.env.PUBLIC_URL+'/assets/posts_icon_active.svg' : (isHoveredPosts ? process.env.PUBLIC_URL+'/assets/posts_icon_active.svg' : process.env.PUBLIC_URL+'/assets/posts_icon.svg')}`} alt="Posts_icon" />
            <span className='ms-1'>Posts</span>
          </Nav.Link>
          <Nav.Link className={`ms-5 d-flex rounded-pill py-1 px-3 ${isHoveredCreate ? 'bg-custom-orange-1 text-white shadow': ''} ${isClickedCreate? 'bg-custom-orange-1 text-white' : 'bg-custom-gray-3 text-custom-gray-2'}`} href="/create-post" onMouseOver={handleMouseOverCreate} onMouseLeave={handleMouseLeaveCreate} onClick={handleClickCreate}>
            <img src={`${isClickedCreate ? process.env.PUBLIC_URL+'/assets/create_icon_active.svg' : (isHoveredCreate ? process.env.PUBLIC_URL+'/assets/create_icon_active.svg' : process.env.PUBLIC_URL+'/assets/create_icon.svg')}`} alt="Create_icon" className="pr-3" />
            <span className='ms-1'>Create</span>
          </Nav.Link>
      </Nav>
      <div className="d-flex align-items-center position-relative">
        <input type="text" placeholder="      Search..." className="form-control rounded-pill border-dark me-4" onMouseOver={handleMouseOverSearch} onMouseLeave={handleMouseLeaveSearch} />
        {isHovered && (
          <div className="position-absolute top-100 start-10 ">
            <img src={`${process.env.PUBLIC_URL}/assets/warning_icon.svg`} alt="warning_icon" className="pr-2" />
            This feature is not available now!
          </div>
        )}
        <img src={`${process.env.PUBLIC_URL}/assets/search_icon.svg`} alt="Search_icon" className="position-absolute start-0 top-50 translate-middle-y ms-2" />
      </div>
    </NavbarBoots>


  );
};