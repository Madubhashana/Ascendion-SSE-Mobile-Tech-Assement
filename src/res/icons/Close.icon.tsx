import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconBasePropsType} from '../../shared/types/app.types';

const iconRatio = 512 / 384;

const CloseIcon = ({size = 384}: IconBasePropsType) => {
  const width = iconRatio * size;
  return (
    <Svg viewBox="0 0 384 512" height={size} width={width}>
      <Path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
    </Svg>
  );
};
export default CloseIcon;
