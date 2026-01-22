import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;


const Cards = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 32px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  max-width: 320px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  p {
    font-size: 14px;
    color: #666;
    margin: 24px 0;
    line-height: 1.6;
  }

  strong {
    display: block;
    margin-top: 12px;
  }
`;

const Dots = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 8px;

  span {
    width: 8px;
    height: 8px;
    background: #ddd;
    border-radius: 50%;
  }

  .active {
    background: #f97316;
  }
`;

export default function Testimonials() {
  return (
    <Section>
      <h2>Our Happy Customers</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Cards>
        <Card>
          <Image src="/users/user1.png" alt="" width={60} height={60} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          </p>
          <strong>Aman Aparam</strong>
          <small>CEO & Founder</small>
        </Card>

        <Card>
          <Image src="/users/user2.png" alt="" width={60} height={60} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          </p>
          <strong>Rashid Khan</strong>
          <small>Designer</small>
        </Card>
      </Cards>

      <Dots>
        <span className="active" />
        <span />
        <span />
      </Dots>
    </Section>
  );
}
