import React, { FC, PropsWithChildren } from 'react';
import {
  LogoContainer,
  MainLayoutWrapper,
  MainPageContentWrapper,
  MainSidebarWrapper,
  TopSidebarContainer,
  UserAvatarWrapper,
} from '@layouts/MainLayout/MainLayoutStyled';
import {
  LogoutOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  TeamOutlined,
  ControlOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { getPath } from '@/router-paths';

type MenuItem = Required<MenuProps>['items'][number];

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const history = useHistory();

  const userMenuItems: MenuProps['items'] = [
    {
      label: 'Chỉnh sửa hồ sơ',
      icon: <UserOutlined />,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: 'Đăng xuất',
      icon: <LogoutOutlined />,
      key: '1',
    },
  ];

  const onUserMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '1') {
      localStorage.clear();
      history.push(getPath('login'));
    }
  };

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  };

  const items: MenuProps['items'] = [
    getItem('Chăm sóc khách hàng', 'cham_soc_khach_hang', <TeamOutlined />, [
      getItem('Quản lý đặt chỗ', 'quan_ly_dat_cho'),
      getItem('Xuất vé', 'xuat_ve'),
    ]),
    getItem('Sales', 'sales', <ShoppingCartOutlined />, [
      getItem('Quản lý nhóm', 'quan_ly_nhom'),
      getItem('Quản lý thành viên', 'quan_ly_thanh_vien'),
      getItem('Quản lý coupon', 'quan_ly_coupon'),
      getItem('Gửi email', 'email'),
    ]),
    getItem('Báo cáo', 'bao_cao', <BarChartOutlined />, [
      getItem('Danh sách đặt chỗ', 'danh_sach_dat_cho'),
      getItem('Báo cáo cổng thanh toán', 'bao_cao_cong_thanh_toan'),
      getItem('Báo cáo hạn mức nhân viên', 'bao_cao_han_muc_nhan_vien'),
      getItem('Lịch sử xuất vé', 'lich_su_xuat_ve'),
    ]),
    getItem('Quản trị', 'quan_tri', <ControlOutlined />, [
      getItem('Quản lý tài khoản nhân viên', 'quan_ly_tai_khoan_nhan_vien'),
      getItem('Quản lý hạn mức nhân viên', 'quan_ly_han_muc_nhan_vien'),
      getItem('Quản lý phí dịch vụ', 'quan_ly_phi_dich_vu'),
      getItem('Quản lý tính điểm', 'quan_ly_tinh_diem'),
      getItem('Quản lý đổi điểm', 'quan_ly_doi_diem'),
    ]),
    getItem('Cài đặt', 'cai_dat', <SettingOutlined />),
  ];

  return (
    <MainLayoutWrapper>

      <MainSidebarWrapper>
        <TopSidebarContainer>
          <LogoContainer>
            <img src={`${process.env.PUBLIC_URL}/assets/imgs/Logo.png`} alt='' />
          </LogoContainer>
          <Dropdown
            menu={{ items: userMenuItems, onClick: onUserMenuClick }}
            placement={'bottomRight'}
            overlayClassName={'user-menu-dropdown'}
            trigger={['click']}
          >
            <UserAvatarWrapper>
              <UserOutlined />
            </UserAvatarWrapper>
          </Dropdown>
        </TopSidebarContainer>
        <Menu
          mode='inline'
          items={items}
          theme='dark'
        />
      </MainSidebarWrapper>

      <MainPageContentWrapper>
        {children}
      </MainPageContentWrapper>

    </MainLayoutWrapper>
  );
};

export default MainLayout;