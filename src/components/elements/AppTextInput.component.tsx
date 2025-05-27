import React from 'react';
import {StyleSheet, TextInput, TextInputProps, TextStyle} from 'react-native';
import {colors} from '../../shared/config/colors';
import {TextTypes} from './AppText.component';

export type AppTextInputPropsType = {
  value?: string;
  containerStyle?: TextStyle;
  textType?: TextTypes;
} & TextInputProps;

const AppTextInput = ({
  value,
  containerStyle,
  textType = TextTypes.Header,
  ...delegated
}: AppTextInputPropsType) => {
  const style = StyleSheet.flatten([
    styles.container,
    {fontSize: textType},
    containerStyle,
  ]);

  return (
    <TextInput
      value={value}
      placeholderTextColor={colors.gray}
      {...delegated}
      style={style}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray,
  },
});

export default AppTextInput;
