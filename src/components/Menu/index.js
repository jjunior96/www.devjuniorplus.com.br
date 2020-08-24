import React, { useEffect, createRef } from 'react';
import lottie from 'lottie-web';

import animation from '../../animations/menuToggler.json';

import * as S from './styled';

function Menu() {
  const animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, [animationContainer]);

  return (
    <S.MenuWrapper>
      <div className="animationContainer" ref={animationContainer} />
    </S.MenuWrapper>
  );
}

export default Menu;
