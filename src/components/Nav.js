import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = () => {
  const [show, setShow] = useState(false);

  const listener = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          src='/images/logo.svg'
          alt='Disney Plus logo'
          onClick={() => (window.location.href = '/')}
        />
      </Logo>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 36px;
  background-color: ${(props) => (props.show ? '#090b13' : 'transparent')};
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  display: inline-block;
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  padding: 0;
  font-size: 0;

  img {
    display: block;
    width: 100%;
  }
`;
