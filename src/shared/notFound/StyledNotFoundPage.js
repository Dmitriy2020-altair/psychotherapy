import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${props => props.theme.colors.text};
`

export const NotFoundTitle = styled.h1`
  font-size: 2rem;
`

export const NotFoundText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`