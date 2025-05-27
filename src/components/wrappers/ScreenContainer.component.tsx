import React, {ReactElement} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleSheet,
  View,
  ViewStyle,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {IS_IOS} from '../../shared/config/constants';

const KEYBOARD_AVOIDING_BEHAVIOR: KeyboardAvoidingViewProps['behavior'] = IS_IOS
  ? 'padding'
  : 'height';

type ScreenContainerPropsType = {
  containerStyle?: ViewStyle;
  children: ReactElement | ReactElement[];
};

const ScreenContainer = ({
  children,
  containerStyle,
}: ScreenContainerPropsType) => {
  const contentContainerStyle = StyleSheet.flatten([
    styles.contentContainerStyle,
    containerStyle,
  ]);

  const mainContainerStyle = StyleSheet.flatten([styles.container]);

  return (
    <View style={mainContainerStyle}>
      <StatusBar animated showHideTransition="fade" />

      <KeyboardAvoidingView
        behavior={KEYBOARD_AVOIDING_BEHAVIOR}
        style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={contentContainerStyle}>{children}</View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingTop: 10,
  },
});

export default ScreenContainer;
