import React from 'react';

import {CalculatorScreen} from './screens/calculator';
import {NavbarScreen} from './screens/navbar';
import {TwoSumScreen} from './screens/twoSum';

type QuestionType = 'question1' | 'question2' | 'question3';

/*
 * Change the question (question1 | question2 | question3) to
 * update the answer!
 */
const question: QuestionType = 'question3';

const App = () => {
  if (question === 'question1') {
    return <CalculatorScreen />;
  }

  if (question === 'question2') {
    return <NavbarScreen />;
  }

  return <TwoSumScreen />;
};

export default App;
