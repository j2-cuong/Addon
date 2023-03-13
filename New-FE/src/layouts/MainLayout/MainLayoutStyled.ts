import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
  display: flex;
`;
export const MainSidebarWrapper = styled.aside`
  width: 280px;
  background-color: #0f172a;
  height: 100%;
  padding: 16px 0 24px;
  min-height: 100vh;
`
export const MainPageContentWrapper = styled.main`
  width: calc(100% - 280px);
`
export const LogoContainer = styled.figure`
  margin-bottom: 0;
  img {
    width: 60px;
    height: 35px;
    object-fit: cover;
    object-position: 0 0;
  }
`
export const TopSidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 150px;
`
export const UserAvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, .2);
  }

  .anticon {
    color: #94a3b8;
    font-size: 20px;
  }
`