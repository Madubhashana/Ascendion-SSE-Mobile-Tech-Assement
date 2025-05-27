import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import AppText, {TextTypes} from './AppText.component';
import {colors} from '../../shared/config/colors';

type AppButtonPropsType = {
  children?: number | string | string[] | ReactElement;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textType?: TextTypes;
  testID?: string;
};

const AppButton = ({
  children,
  disabled,
  onPress,
  containerStyle,
  textType = TextTypes.Section,
  testID,
}: AppButtonPropsType) => {
  const style = StyleSheet.flatten([
    styles.container,
    {opacity: disabled ? 0.6 : 1},
    containerStyle,
  ]);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={style}
      accessibilityRole="button"
      testID={testID}>
      <AppText textStyle={styles.label} color={colors.white} type={textType}>
        {children}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: colors.black,
    borderRadius: 8,
  },
  label: {
    textAlign: 'center',
  },
});

export default AppButton;
