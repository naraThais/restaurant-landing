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
    justify-content: center;
    align-content: center;
 

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
  }
`;

const Left = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  h1 {
    font-size: 56px;
    margin-bottom: 24px;
  }

  p {
    color: #666;
    margin-bottom: 32px;
    max-width: 420px;
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
  }

  .book {
    background: #f97316;
    color: #fff;
    border: none;
    padding: 12px 28px;
    border-radius: 8px;
  }
`;

const Right = styled.div`
  position: relative;
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
        <Image src="/hero.png" alt="Restaurant" width={800} height={700} />
      </Right>
    </Section>
  );
}
