import React from 'react';
import styled, { css } from 'styled-components';

const bgAnimationCss = css`
  background-size: 500%;
  background-repeat: no-repeat;
  animation: move-bg 120s alternate infinite linear;
  @keyframes move-bg {
    0% {
      background-position: 30% 70%;
    }
    40% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 50% 75%;
    }
    75% {
      background-position: 75% 0%;
    }
    100% {
      background-position: 0% 30%;
    }
  }

  @media (min-width: 700px) {
    background-size: 350%;
    background-repeat: no-repeat;
    animation: move-bg-desktop 120s alternate infinite linear;
  }
  @media (min-width: 1200px) {
    background-size: 200%;
    background-repeat: no-repeat;
    animation: move-bg-desktop 120s alternate infinite linear;
  }
  @keyframes move-bg-desktop {
    0% {
      background-position: 30% 70%;
    }
    25% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 75%;
    }
    75% {
      background-position: 75% 0%;
    }
    100% {
      background-position: 0% 30%;
    }
  }
`;

const StyledBgContainer = styled('div')<{ animate: boolean }>`
  height: 100%;
  overflow: hidden;
  background-image: url('/assets/images/bg.png');
  background-size: cover;
  background-position: 30%;
  ${(props) => (props.animate ? bgAnimationCss : null)}
`;

type BgContainerProps = {
  animate: boolean;
};

const BgContainer: React.FC<BgContainerProps> = ({ animate, children }) => {
  return <StyledBgContainer animate={animate}>{children}</StyledBgContainer>;
};

export default BgContainer;
