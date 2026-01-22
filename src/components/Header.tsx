import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;

  a {
    text-decoration: none;
    color: #111;
    font-size: 14px;
  }
`;

const Button = styled.button`
  background: #f97316;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <span><Image src="/logo.png" alt="Restaurant Logo" width={198} height={50} /></span>

      <Nav>
        <a href="#">Menu</a>
        <a href="#">Events</a>
        <a href="#">Gallery</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </Nav>

      <Button>Book a table</Button>
    </Container>
  );
}
