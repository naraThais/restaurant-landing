import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  position: relative;
  width: 100%;
  background: #F3F4F4;
  padding-bottom: 320px;
  overflow-x: clip;

  @media (max-width: 1024px) {
    padding-bottom: 240px;
  }

  @media (max-width: 768px) {
    padding-bottom: 160px;
    overflow: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    top: -250px;
    right: -0.5vw;
    width: 2000px;
    height: 1000px;
    background-image: url('/background.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right top;
    pointer-events: none;
    z-index: 0;

    /* Tablet */
    @media (max-width: 1024px) {
      width: 1400px;
      height: 700px;
      top: -180px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      display: none;
    }
  }
`;



const Left = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 520px;
    height: auto;
  }
`;


const Right = styled.div`
  position: relative;
  z-index: 1;

  h2 {
    font-size: 42px;
    margin-bottom: 24px;
    line-height: 1.2;

    @media (max-width: 1024px) {
      font-size: 34px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    color: #666;
    margin-bottom: 32px;
    max-width: 420px;

    @media (max-width: 1024px) {
       max-width: 360px;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .buttons {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }

  button {
    padding: 12px 28px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 320px;
    }
  }

  .menu {
    background: #111;
    color: #fff;
  }

  .book {
    background: #f97316;
    color: #fff;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;


const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 120px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  justify-items: center;

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 40px;
    padding: 100px 24px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 80px 20px;
    gap: 40px;
  }
`;

export default function Welcome() {
  return (
    <Section>
      <Container>
        <Left>
          <Image
            src="/welcome.svg"
            alt="Dish"
            width={768}
            height={667}
            priority
          />
        </Left>

        <Right>
          <h2>Welcome to Our Restaurant</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="buttons">
            <button className="menu">Menu</button>
            <button className="book">Book a table</button>
          </div>
        </Right>
      </Container>
    </Section>
  );
}
