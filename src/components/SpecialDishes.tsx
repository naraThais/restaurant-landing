import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
    position: relative;
    width: 100%;
    background: #F3F4F4;
    padding: 80px 0 120px;
    overflow-x: clip;
    margin: 0 auto;
  
    @media (max-width: 768px) {
      overflow: hidden;
    }

&::before {
  content: "";
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;         /* nunca passa da tela */
  max-width: 847px;   /* mantém o tamanho original no desktop */
  height: 257px;
  background-image: url('/star.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top;
  pointer-events: none;
  z-index: 0;
}

`;

const Container = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
    gap: 24px;
    display: flex
;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

const Card = styled.div`
  background: #ffffff77;
  width: 265px;
  height: 309px;
  padding: 32px 20px;
  border-radius: 100px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  img{
    margin-top: -102px;
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

