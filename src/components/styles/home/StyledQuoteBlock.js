import styled from 'styled-components'

export const QuoteBlockWrapper = styled.section`
  width: 100%;
  display: flex;
  margin-top: 30px;

  @media (max-width: 865px) {
    flex-direction: column;
  }
`
export const QuoteBlock = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.primary_blue};
  padding: 100px;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 865px) {
    width: 100%;
    padding: 30px 30px 60px;
  }
`

export const AvatarWarpper = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.primary_blue};

  @media (max-width: 865px) {
    width: 100%;
  }
`

export const Avatar = styled.img`
  width: 100%;
`