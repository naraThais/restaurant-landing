import styled from 'styled-components';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
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
  }

  form {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  input {
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    min-width: 280px;
  }

  button {
    background: #f97316;
    color: #fff;
    border: none;
    padding: 12px 28px;
    border-radius: 8px;
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
