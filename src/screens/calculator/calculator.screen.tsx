import React from 'react';
import ScreenContainer from '../../components/wrappers/ScreenContainer.component';
import AppText, {TextTypes} from '../../components/elements/AppText.component';
import {useForm} from 'react-hook-form';
import FormTextInput from '../../components/form/FormTextInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  CalculatorFormSchema,
  CalculatorFormSchemaType,
} from './calculator-form.schema';
import AppButton from '../../components/elements/AppButton.component';
import {StyleSheet} from 'react-native';

const CalculatorScreen = () => {
  const {control, handleSubmit} = useForm<CalculatorFormSchemaType>({
    resolver: zodResolver(CalculatorFormSchema),
  });

  const onSubmit = (data: CalculatorFormSchemaType) => {};

  return (
    <ScreenContainer>
      <AppText type={TextTypes.Title} textStyle={styles.title}>
        Calculator
      </AppText>

      <FormTextInput
        control={control}
        name="inputOne"
        label="First Number"
        keyboardType="number-pad"
      />
      <FormTextInput
        control={control}
        name="inputTwo"
        label="Second Number"
        keyboardType="number-pad"
      />
      <AppButton
        onPress={handleSubmit(onSubmit)}
        containerStyle={styles.ctaButton}>
        Add Numbers
      </AppButton>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  ctaButton: {
    marginTop: 10,
  },
});

export default CalculatorScreen;
