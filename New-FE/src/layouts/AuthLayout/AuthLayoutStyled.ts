import styled from 'styled-components';

export const AuthLayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
export const AuthFormWrapper = styled.div`
  width: 100%;
  padding: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContent = styled.div`
  max-width: 320px;
  flex: 1;
`

// export const WelcomeBanner = styled.section`
//   position: relative;
//   width: 50%;
//   background-color: #ab9332;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 64px 112px;

//   svg {
//     position: absolute;
//     opacity: .25;

//     &.circle {
//       inset: 0;
//     }

//     &.dots {
//       top: 0;
//       right: 0;
//       transform: translate(30%, -30%);
//     }
//   }
// `;
// export const WelcomeContent = styled.div`
//   position: relative;
//   z-index: 1;

//   * {
//     color: white;
//     text-shadow: 0 0 10px rgba(0, 0, 0, .2);
//   }

//   h2 {
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: bold;
//   }

//   p {
//     font-size: 16px;
//     line-height: 1.5;
//   }
// `;
export const FormHeading = styled.h1`
  color: #1e293b;
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 5px;
  text-align: center;
`;