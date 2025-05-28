import React, {useState} from 'react';
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
import {Platform, StyleSheet, View} from 'react-native';
import {colors} from '../../shared/config/colors';

const CalculatorScreen = () => {
  const [total, setTotal] = useState<number>(0);

  const {control, handleSubmit} = useForm<CalculatorFormSchemaType>({
    resolver: zodResolver(CalculatorFormSchema),
  });

  const onSubmit = (data: CalculatorFormSchemaType) => {
    setTotal(data.inputOne + data.inputTwo);
  };

  return (
    <ScreenContainer containerStyle={styles.screenContainer}>
      <AppText type={TextTypes.Title} textStyle={styles.title}>
        Calculator
      </AppText>

      <View style={styles.totalValueContainer}>
        <AppText type={TextTypes.Label}>Total:</AppText>
        <AppText type={TextTypes.Title} testID="total-value">
          {total}
        </AppText>
      </View>

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
        containerStyle={styles.ctaButton}
        testID="add-numbers-button">
        Add Numbers
      </AppButton>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    ...Platform.select({
      web: {
        maxWidth: 500,
        margin: 'auto',
        width: '100%',
      },
    }),
  },
  title: {
    marginBottom: 40,
  },
  totalValueContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.gray,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  ctaButton: {
    marginTop: 30,
  },
});

export default CalculatorScreen;
