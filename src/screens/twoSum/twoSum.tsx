import React from 'react';
import ScreenContainer from '../../components/wrappers/ScreenContainer.component';
import AppText, {TextTypes} from '../../components/elements/AppText.component';
import AppButton from '../../components/elements/AppButton.component';
import {twoSum} from '../../shared/lib/util';

const TwoSumScreen = () => {
  const handleOnPress = () => {
    console.log(twoSum([2, 7, 11, 15], 9));
  };

  return (
    <ScreenContainer>
      <AppText type={TextTypes.Title}>Two Sum II</AppText>
      <AppButton onPress={handleOnPress}>Go</AppButton>
    </ScreenContainer>
  );
};

export default TwoSumScreen;
