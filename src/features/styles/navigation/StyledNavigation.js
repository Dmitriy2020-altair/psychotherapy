import styled from 'styled-components';


export const NavWrapper = styled.section`
    border-top: 1px solid ${props => props.theme.colors.primary};
`

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: start;
    margin: 15px auto 0 auto; 
    padding: 20px;
    width: 80vw;

    @media(max-width: 868px) {
      justify-content: space-between;
      }

      @media(max-width: 430px) {
        padding: 20px 0;
      }
  }

  li {
    margin-right: 50px;
    text-align: center;

    &.active a {
      color: ${props => props.theme.colors.onHover};
      border-bottom: 2px solid ${props => props.theme.colors.onHover};
    }

    @media(max-width: 868px) {
        margin-right: 0;
      }

    a {
      font-size: 1.3rem;
      font-weight: 500;
      text-decoration: none;
      color: ${props => props.theme.colors.text};
      position: relative;

      @media(max-width: 600px) {
        font-size: 1rem;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${props => props.theme.colors.onHover};
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }

      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
`;