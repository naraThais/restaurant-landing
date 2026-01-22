import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 120px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  justify-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: calc((100vw - 1200px) / -2);
    top: -50px;
    width: 497px;
    height: 303px;
    background-image: url('/farlic.svg');
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media (max-width: 1248px) {
      left: -40px;
    }

    /* Mobile: remove decoração */
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 48px;
    padding: 100px 24px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 80px 20px;
    text-align: center;
  }
`;


const Left = styled.div`
  h2 {
    font-size: 42px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  p {
    color: #666;
    margin-bottom: 32px;
    max-width: 420px;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    @media (max-width: 1279px) {
       max-width: 360px;
    }
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
    align-items: flex-start;

    @media (max-width: 768px) {
      align-items: center;
      
    }
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: left;
  }

  .check-icon {
    width: 24px;
    height: 24px;
    background: #f97316;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    flex-shrink: 0;
  }

  .info-text {
    color: #333;
    font-size: 16px;
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
    cursor: pointer;
    width: fit-content;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .menu {
    background: #111;
    color: #fff;
    border: none;
  }

  .book {
    background: #f97316;
    color: #fff;
    border: none;
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

const ChefImage = styled(Image)`
  width: 100%;
  max-width: 507px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;


export default function Chef() {
  return (
    <Section>
      <Left>
        <h2>Our Expects Chef</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="info-list">
          <div className="info-item">
            <div className="check-icon">✓</div>
            <span className="info-text">Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div className="info-item">
            <div className="check-icon">✓</div>
            <span className="info-text">Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div className="info-item">
            <div className="check-icon">✓</div>
            <span className="info-text">Lorem ipsum dolor sit amet, consectetur</span>
          </div>
        </div>

        <div className="buttons">
          <button className="menu">Menu</button>
          <button className="book">Book a table</button>
        </div>
      </Left>

      <Right>
        <ChefImage src="/chef.svg" alt="Chef" width={507} height={695} />
      </Right>
    </Section>
  );
}