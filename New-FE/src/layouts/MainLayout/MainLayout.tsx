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
    getItem('Tour', 'tour', <TeamOutlined />, [
      getItem('Danh sách Tour', 'danh_sach_tour'),
      getItem('Tìm kiếm Tour', 'tim_kiem_tour'),
      getItem('Tạo Tour', 'tao_tour'),
      getItem('Sửa Tour', 'sua_tour'),
      getItem('Xóa Tour', 'xoa_tour'),
      getItem('Duyệt Tour', 'duyet_tour'),
    ]),
    getItem('Bookings', 'sales', <ShoppingCartOutlined />, [
      getItem('Quản lý Booking', 'quan_ly_booking'),
      getItem('Đặt Booking tour', 'dat_booking_tour'),
      getItem('Thay đổi trạng thái Booking', 'thay_doi_trang_thai_booking'),
      getItem('Thanh toán Booking', 'thanh_toan_booking'),
    ]),
    getItem('Báo cáo', 'bao_cao', <BarChartOutlined />, [
      getItem('Quản lý báo cáo thanh toán', 'quan_ly_bao_cao_thanh_toan'),
    ]),
    getItem('Cấu hình', 'quan_tri', <ControlOutlined />, [
      getItem('Cấu hình danh mục Tour', 'cau_hinh_danh_muc_tour'),
      getItem('Cấu hình chiết khấu', 'cau_hinh_chiet_khau'),
      getItem('Cấu hình lưu ý', 'cau_hinh_luu_y'),
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