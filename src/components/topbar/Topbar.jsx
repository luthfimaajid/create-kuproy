import React from 'react';
import { Navbar, Image } from 'react-bootstrap';

const Topbar = () => {
  return (
    <Navbar bg="light" variant="light" className="px-4 py-3">
      <Navbar.Brand>
        <Image src={`${process.env.PUBLIC_URL}/assets/icon_aesthetic.svg`} alt="Icon" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Topbar;