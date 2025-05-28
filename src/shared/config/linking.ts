import {Platform} from 'react-native';

export default {
  prefixes: Platform.select({
    web: ['http://localhost:19006', 'AscendionTechAssessment://'],
    default: ['AscendionTechAssessment://app'],
  }),

  config: {
    screens: {
      Welcome: '',
    },
  },
};
