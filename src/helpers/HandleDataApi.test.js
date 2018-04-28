import sampleData from '../test-data/workout-data.json';
import HandleDataApi from './HandleDataApi';

const {
  calculateBestEffort,
} = new HandleDataApi();

describe('cleaner test', () => {
  test('cleaner is a function', () => {
    expect(calculateBestEffort).toBeInstanceOf(Function);
  });
});
