import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  position: relative;
  width: 100%;
  background: #F3F4F4;
  padding: 80px 0 120px;
  overflow-x: clip;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 72px 0 96px;
  }

  @media (max-width: 768px) {
    padding: 64px 0 80px;
    overflow: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 847px;
    height: 257px;
    background-image: url('/star.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center top;
    pointer-events: none;
    z-index: 0;

    @media (max-width: 768px) {
      height: 180px;
      top: 16px;
    }
  }
`;


const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  h1 {
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    max-width: 520px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;



const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;


const Card = styled.div`
  background: #ffffff77;
  width: 265px;
  min-height: 309px;
  padding: 32px 20px;
  border-radius: 100px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  img {
    margin-top: -102px;

    @media (max-width: 640px) {
      margin-top: -80px;
      width: 160px;
      height: auto;
    }
  }

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;




export default function SpecialDishes() {
  return (
    <Section>
      <Container>
        <h1>Our Special Dishes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Grid>
          <Card>
            <Image src="/F1.svg" alt="" width={207} height={207} />
            <h4>Lumpia with Sauce</h4>
            <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
          </Card>

          <Card>
            <Image src="/F2.svg" alt="" width={207} height={207} />
            <h4>Fish and Veggie</h4>
            <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
          </Card>

          <Card>
            <Image src="/F3.svg" alt="" width={207} height={207} />
            <h4>Tofu Chili</h4>
            <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
          </Card>

          <Card>
            <Image src="/F4.svg" alt="" width={207} height={207} />
            <h4>Egg and Cucumber</h4>
            <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
          </Card>
        </Grid>
      </Container>
    </Section >
  );
}

