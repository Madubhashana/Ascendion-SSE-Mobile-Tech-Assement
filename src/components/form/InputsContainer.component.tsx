import React, {ReactElement} from 'react';
import AppText, {TextTypes} from '../elements/AppText.component';
import {StyleSheet, View} from 'react-native';

type InputsContainerPropsType = {
  label?: string;
  error?: string;
  children: ReactElement | ReactElement[];
};

const InputsContainer = ({
  label,
  children,
  error,
}: InputsContainerPropsType) => {
  const isError = !!error;

  const labelText = label && <AppText type={TextTypes.Label}>{label}</AppText>;

  const inputErrors = isError ? (
    <AppText type={TextTypes.Label} color="red">
      {error}
    </AppText>
  ) : null;

  return (
    <View style={styles.container}>
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
