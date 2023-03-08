import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  AuthFormWrapper,
  AuthLayoutWrapper, FormContent, FormHeading, FormSubHeading, LogoContainer,
  WelcomeBanner,
  WelcomeContent,
} from '@layouts/AuthLayout/AuthLayoutStyled';
import { Observer } from 'mobx-react-lite';
import { useStore } from '@/store';

type Props = PropsWithChildren & {
  title: string;
  subTitle: ReactNode
};

/** Children should be raw AntD Form only */
const AuthLayout: FC<Props> = ({ children, title, subTitle }) => {
  const { commonStore } = useStore();

  return <Observer>
    {() => {
      const { appTheme } = commonStore;

      return (
        <AuthLayoutWrapper>
          <AuthFormWrapper>
            <FormContent>
              <LogoContainer>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/Logo.png`} alt='' />
              </LogoContainer>
              <FormHeading>
                {title}
              </FormHeading>
              <FormSubHeading color={appTheme}>
                {subTitle}
              </FormSubHeading>
              {children}
            </FormContent>
          </AuthFormWrapper>
          <WelcomeBanner>
            <svg className={'circle'} viewBox='0 0 960 540' width='100%' height='100%'
                 preserveAspectRatio='xMidYMax slice'
                 xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' stroke='currentColor' strokeWidth='100'>
                <circle r='234' cx='196' cy='23'></circle>
                <circle r='234' cx='790' cy='491'></circle>
              </g>
            </svg>

            <svg className={'dots'} viewBox='0 0 220 192' width='220' height='192' fill='none'>
              <defs>
                <pattern id='837c3e70-6c3a-44e6-8854-cc48c737b659' x='0' y='0' width='20' height='20'
                         patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' fill='currentColor'></rect>
                </pattern>
              </defs>
              <rect width='220' height='192' fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'></rect>
            </svg>

            <WelcomeContent>
              <h2>
                787 Manager App<br />
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </WelcomeContent>
          </WelcomeBanner>
        </AuthLayoutWrapper>
      );
    }
    }
  </Observer>;
};

export default AuthLayout;