import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  justify-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -120px;
    left: -180px;
    width: 700px;
    height: 700px;
    background-image: url('/Ellipse.png');
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.5;
    pointer-events: none;

    /* Tablet */
    @media (max-width: 1024px) {
      width: 520px;
      height: 520px;
      top: -80px;
      left: -140px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 48px;
    padding: 72px 24px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 64px 20px;
  }
`;


const Left = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  h1 {
    font-size: 56px;
    margin-bottom: 8px;
    line-height: 1.1;

    @media (max-width: 1024px) {
      font-size: 44px;
    }

    @media (max-width: 768px) {
      font-size: 34px;
    }
  }

  p {
    color: #666;
    margin-bottom: 24px;
    max-width: 420px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  span {
    display: inline-flex;
    justify-content: center;

    img {
      @media (max-width: 768px) {
        width: 72px;
        height: 72px;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  }

  button {
    padding: 14px 28px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%;
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
`;


const Right = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    order: -1; /* imagem sobe no mobile */
  }
`;


export default function Hero() {
  return (
    <Section>
      <Left>
        <span><Image src="/carimbo.png" alt="Restaurant Logo" width={104} height={104} /></span>
        <h1>We provide the best food for you</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="buttons">
          <button className="menu">Menu</button>
          <button className="book">Book a table</button>
        </div>
      </Left>

      <Right>
        <Image
          src="/hero.png"
          alt="Restaurant"
          width={800}
          height={700}
          style={{
            width: '100%',
            maxWidth: '520px',
            height: 'auto',
          }}
        />
      </Right>
    </Section>
  );
}
