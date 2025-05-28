import React, {ReactElement} from 'react';
import AppText, {TextTypes} from '../elements/AppText.component';
import {StyleSheet, View, ViewStyle} from 'react-native';

type InputsContainerPropsType = {
  label?: string;
  error?: string;
  children: ReactElement | ReactElement[];
  name?: string;
  containerStyle?: ViewStyle;
};

const InputsContainer = ({
  label,
  children,
  error,
  name,
  containerStyle,
}: InputsContainerPropsType) => {
  const isError = !!error;

  const labelText = label && <AppText type={TextTypes.Label}>{label}</AppText>;

  const inputErrors = isError ? (
    <AppText type={TextTypes.Label} color="red" testID={`input-error-${name}`}>
      {error}
    </AppText>
  ) : null;

  const style = StyleSheet.flatten([styles.container, containerStyle]);

  return (
    <View style={style}>
      {labelText}
      {children}
      {inputErrors}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginBottom: 10,
  },
});

export default InputsContainer;
