import styled from 'styled-components';

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: start;
    margin: 0 auto; 
    padding: 20px;
    width: 80vw;

    @media(max-width: 868px) {
        justify-content: center;
      }

      @media(max-width: 430px) {
        padding: 20px 0;
      }
  }

  li {
    margin-right: 50px;
    text-align: center;

    @media(max-width: 510px) {
        margin-right: 30px;
      }

    @media(max-width: 430px) {
        margin-right: 10px;
      }

    a {
      font-size: 1.5rem;
      text-decoration: none;
      color: ${props => props.theme.colors.text};
      transition: 0.3s ease;

      @media(max-width: 600px) {
        font-size: 1rem;
      }

      &:hover {
        color: ${props => props.theme.colors.onHover};
      }
    }
  }
`;