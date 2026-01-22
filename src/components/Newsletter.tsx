import styled from 'styled-components';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;

  @media (max-width: 1024px) {
    padding: 96px 24px;
  }

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

const Box = styled.div`
  background-image: url('/newsletter-bg.png');
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  padding: 80px;
  text-align: center;
  color: #fff;

  h2 {
    font-size: 36px;
    margin-bottom: 24px;
    line-height: 1.2;

    @media (max-width: 1024px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  form {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 12px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  input {
    padding: 14px 16px;
    border-radius: 8px;
    border: none;
    min-width: 280px;
    font-size: 14px;

    @media (max-width: 768px) {
      min-width: 100%;
    }
  }

  button {
    background: #f97316;
    color: #fff;
    border: none;
    padding: 14px 28px;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  /* Mobile padding */
  @media (max-width: 768px) {
    padding: 48px 20px;
  }
`;


export default function Newsletter() {
  return (
    <Section>
      <Box>
        <h2>Get Or Promo Code by Subscribing To our Newsletter</h2>

        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </Box>
    </Section>
  );
}
