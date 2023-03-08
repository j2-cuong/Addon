import styled from 'styled-components';

export const AuthLayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
export const AuthFormWrapper = styled.div`
  width: 50%;
  padding: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const FormContent = styled.div`
  max-width: 320px;
  flex: 1;
`
export const LogoContainer = styled.figure`
  margin-bottom: 20px;

  img {
    width: 60px;
    height: 50px;
    object-fit: cover;
    object-position: 0 0;
  }
`
export const WelcomeBanner = styled.section`
  position: relative;
  width: 50%;
  background-color: #ab9332;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 112px;

  svg {
    position: absolute;
    opacity: .25;

    &.circle {
      inset: 0;
    }

    &.dots {
      top: 0;
      right: 0;
      transform: translate(30%, -30%);
    }
  }
`;
export const WelcomeContent = styled.div`
  position: relative;
  z-index: 1;

  * {
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }

  h2 {
    font-size: 48px;
    line-height: 1.1;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;
export const FormHeading = styled.h1`
  color: #1e293b;
  font-weight: 800;
  font-size: 32px;
  margin-bottom: 5px;
`;
type FormSubHeadingLinkColorProps = {
  color?: string;
}
export const FormSubHeading = styled.div<FormSubHeadingLinkColorProps>`
  font-size: 14px;
  margin-bottom: 30px;

  span {
    color: ${props => props.color ?? '#ab9332'};
    cursor: pointer;
  }
`;