import React, {ReactElement} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

export enum TextTypes {
  Title = 25,
  Header = 18,
  Section = 16,
  Body = 14,
  Label = 12,
}

type AppTextProps = {
  children?: number | string | string[] | ReactElement;
  textStyle?: TextStyle;
  type?: TextTypes;
  adjustsFontSizeToFit?: boolean;
  color?: string;
} & Omit<TextProps, 'style'>;

const AppText = ({
  children,
  type = TextTypes.Body,
  textStyle = {},
  adjustsFontSizeToFit = true,
  color,
  ...textProps
}: AppTextProps) => {
  const style = StyleSheet.flatten([styles[type], {color}, textStyle]);

  return (
    <Text
      style={style}
      allowFontScaling={false}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      {...textProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  [TextTypes.Title]: {
    fontSize: TextTypes.Title,
    fontWeight: '700',
  },
  [TextTypes.Header]: {
    fontSize: TextTypes.Header,
    fontWeight: '700',
  },
  [TextTypes.Body]: {
    fontSize: TextTypes.Body,
    fontWeight: '400',
  },
  [TextTypes.Label]: {
    fontSize: TextTypes.Label,
    fontWeight: '400',
  },
  [TextTypes.Section]: {
    fontSize: TextTypes.Section,
    fontWeight: '500',
  },
});

export default AppText;
