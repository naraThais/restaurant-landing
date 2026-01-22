import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
     max-width: 1280px;
    margin: 0 auto;
    padding: 120px 24px;
    display: grid
;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    justify-content: center;
    align-content: center;
    justify-items: center;

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
  }
`;

const Left = styled.div`
  h2 {
    font-size: 42px;
    margin-bottom: 24px;
  }

  p {
    color: #666;
    margin-bottom: 32px;
    max-width: 420px;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 12px;
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
  }

  .menu {
    background: #111;
    color: #fff;
    border: none;
    padding: 12px 28px;
    border-radius: 8px;
    cursor: pointer;
  }

  .book {
    background: #f97316;
    color: #fff;
    border: none;
    padding: 12px 28px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const Right = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ChefImage = styled(Image)`
  position: relative;
  z-index: 1;
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