import HandleDataApi from './HandleDataApi';

const api = new HandleDataApi();
const {
  calculateBestEffort,
  calculateAvgPower,
  getAllGPSLocations,
  getPowerData,
} = api;

const testPowerData = [
  {
    millisecondOffset: 60000,
    values: {
      power: 50,
      positionLat: 0.5,
      positionLong: 1,
    },
  },
  {
    millisecondOffset: 120000,
    values: {
      power: 75,
      positionLat: 2,
      positionLong: 3,
    },
  },
  {
    millisecondOffset: 180000,
    values: {
      power: 100,
      positionLat: 4,
      positionLong: 5,
    },
  },
];

describe('methods are proper instances', () => {
  it('calc best effort is a object', () => {
    expect(calculateBestEffort).toBeInstanceOf(Object);
  });

  it('calc best effort is a function', () => {
    expect(calculateBestEffort).toBeInstanceOf(Function);
  });

  it('calc avg power is a object', () => {
    expect(calculateAvgPower).toBeInstanceOf(Object);
  });

  it('calc avg power is a function', () => {
    expect(calculateAvgPower).toBeInstanceOf(Function);
  });

  it('get all gps locations is a object', () => {
    expect(getAllGPSLocations).toBeInstanceOf(Object);
  });

  it('get all gps locations is a function', () => {
    expect(getAllGPSLocations).toBeInstanceOf(Function);
  });

  it('get power data is a object', () => {
    expect(getPowerData).toBeInstanceOf(Object);
  });

  it('get power data is a function', () => {
    expect(getPowerData).toBeInstanceOf(Function);
  });
});

describe('calculateBestEffort tests', () => {
  const result1 = api.calculateBestEffort(testPowerData, 3, 'test');
  const result2 = api.calculateBestEffort(testPowerData, 2, 'test');

  it('should correctly identify the best avg and return its values', () => {
    expect(result1.bestAverage).toBe(75);
    expect(result2.bestAverage).toBe(87.5);
  });
});

describe('calculateAvgPower tests', () => {
  const result = api.calculateAvgPower(testPowerData);

  it('should correctly return the average', () => {
    expect(result).toBe(75);
  });
});

describe('getAllGPSLocations', () => {
  const result = api.getAllGPSLocations(testPowerData);

  it('should return lat long in the proper format', () => {
    expect(result).toEqual([[0.5, 1], [2, 3], [4, 5]]);
  });
});

describe('getPowerData tests', () => {
  const result = api.getPowerData(testPowerData);

  it('should format power data vs time properly', () => {
    expect(result).toEqual([[1, 50], [2, 75], [3, 100]]);
  });
});
