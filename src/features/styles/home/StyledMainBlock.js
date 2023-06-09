import styled from 'styled-components'

export const MainPageWrapper = styled.main`
  width: 100%;
`

export const QuoteBlockWrapper = styled.section`
  display: flex;
  margin-top: 30px;

  @media (max-width: 865px) {
    flex-direction: column;
  }
`
export const QuoteBlock = styled.div`
  width: 50%;
  padding: 100px;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  font-weight: 500;
  background: ${props => props.theme.colors.blue_gradient};

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