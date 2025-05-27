import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';
import InputsContainer from './InputsContainer.component';
import AppTextInput, {
  AppTextInputPropsType,
} from '../elements/AppTextInput.component';
import {colors} from '../../shared/config/colors';

export type FormTextInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  defaultValue?: PathValue<T, Path<T>>;
  disabled?: boolean;
} & AppTextInputPropsType;

const FormTextInput = <T extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  disabled,
  ...textInputProps
}: FormTextInputProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocusChange = () => setIsFocused(!isFocused);

  const handleOnSubmitEditing = () => {
    Keyboard.dismiss();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field: {onChange, value}, fieldState: {error}}) => {
        const isError = error?.message as string | undefined;
        const textContainerStyle = {
          borderColor: isError ? colors.red : colors.gray,
        };

        return (
          <InputsContainer error={isError} label={label} name={name}>
            <AppTextInput
              value={value}
              name={name}
              allowFontScaling={false}
              editable={!disabled}
              onSubmitEditing={handleOnSubmitEditing}
              onChangeText={onChange}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              spellCheck={false}
              onFocus={handleOnFocusChange}
              onBlur={handleOnFocusChange}
              containerStyle={textContainerStyle}
              {...textInputProps}
            />
          </InputsContainer>
        );
      }}
    />
  );
};

export default FormTextInput;
