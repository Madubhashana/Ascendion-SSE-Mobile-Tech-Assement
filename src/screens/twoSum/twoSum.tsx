import React, {useState} from 'react';
import ScreenContainer from '../../components/wrappers/ScreenContainer.component';
import AppText, {TextTypes} from '../../components/elements/AppText.component';
import AppButton from '../../components/elements/AppButton.component';
import {twoSum} from '../../shared/lib/util';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {TwoSumFormSchema, TwoSumFormSchemaType} from './twosum-form.schema';
import FormTextInput from '../../components/form/FormTextInput';
import {Platform, StyleSheet, View} from 'react-native';
import {colors} from '../../shared/config/colors';

const TwoSumScreen = () => {
  const [numberArray, setNumberArray] = useState<number[]>([]);
  const [answer, setAnswer] = useState<
    {target: number; array: number[]; indicies: number[]} | undefined
  >(undefined);

  const {control, handleSubmit, getValues, setValue, reset} =
    useForm<TwoSumFormSchemaType>({
      resolver: zodResolver(TwoSumFormSchema),
    });

  const handleOnPressAdd = () => {
    const value = getValues('number');
    let newNumbersArray = [...numberArray];

    if (answer) {
      newNumbersArray = [];
      setAnswer(undefined);
    }

    if (value) {
      setNumberArray(() =>
        [...newNumbersArray, Number(value)].sort((a, b) => a - b),
      );
      setValue('number', undefined);
    }
  };

  const onSubmit = (data: TwoSumFormSchemaType) => {
    const indicies = twoSum(numberArray, data.target);

    if (indicies.length) {
      setAnswer({
        indicies,
        target: data.target,
        array: numberArray,
      });
      setNumberArray([]);
      reset();
    }
  };

  const isDisabled = !numberArray.length;

  return (
    <ScreenContainer containerStyle={styles.screenContainer}>
      <AppText type={TextTypes.Title}>Two Sum II</AppText>

      <View style={styles.addNumbersContainer}>
        <FormTextInput
          containerStyle={styles.addNumContainerStyle}
          control={control}
          name="number"
          placeholder="Enter number"
          keyboardType="number-pad"
          label="Number"
        />
        <AppButton
          containerStyle={styles.addNumContainerStyle}
          onPress={handleOnPressAdd}>
          Add
        </AppButton>
      </View>

      <AppText type={TextTypes.Label}>Numbers Array</AppText>
      <View style={styles.arrayContainer}>
        <AppText type={TextTypes.Section}>{numberArray.join(', ')}</AppText>
      </View>

      <FormTextInput
        control={control}
        name="target"
        label="Target"
        keyboardType="number-pad"
        placeholder="Enter Target"
      />

      <AppButton
        onPress={handleSubmit(onSubmit)}
        disabled={isDisabled}
        containerStyle={styles.ctaButton}>
        Go
      </AppButton>

      {answer ? (
        <>
          <AppText type={TextTypes.Section}>{`Array: ${[
            answer.array.join(', '),
          ]}`}</AppText>

          <AppText type={TextTypes.Section}>{`Target: ${[
            answer.target,
          ]}`}</AppText>

          <AppText type={TextTypes.Title}>{`Answer: ${[
            answer.indicies.join(', '),
          ]}`}</AppText>
        </>
      ) : null}
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
  addNumbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  addNumContainerStyle: {
    flex: 1,
  },
  arrayContainer: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    marginBottom: 20,
  },
  ctaButton: {
    marginVertical: 40,
  },
});

export default TwoSumScreen;
