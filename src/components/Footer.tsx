import styled from 'styled-components';

const Container = styled.footer`
  background: #fff;
  margin-top: 120px;
  padding: 80px 24px 40px;
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
`;

const Column = styled.div`
  h4 {
    margin-bottom: 24px;
  }

  p, a {
    color: #666;
    font-size: 14px;
    line-height: 1.8;
    text-decoration: none;
    display: block;
  }
`;

const Bottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 32px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
`;

export default function Footer() {
  return (
    <Container>
      <Grid>
        <Column>
          <strong>restaurant</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </Column>

        <Column>
          <h4>Navigation</h4>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Column>

        <Column>
          <h4>Dishes</h4>
          <a href="#">Fish & Veggie</a>
          <a href="#">Tofu Chili</a>
          <a href="#">Egg & Cucumber</a>
        </Column>

        <Column>
          <h4>Follow us</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </Column>
      </Grid>

      <Bottom>
        <span>© 2024 Restaurant. All rights reserved.</span>
        <span>Terms of Service · Privacy Policy</span>
      </Bottom>
    </Container>
  );
}
