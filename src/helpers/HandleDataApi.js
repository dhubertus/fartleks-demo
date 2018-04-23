
export default class HandleDataApi {

  calculateBestEffort(data, timeInt) {
    const range = data.slice(0, timeInt);
    const initalAverage = this.calculateAvgPower(range);
    const result = {
      bestAverage: initalAverage,
      bestValues: range,
    };

    for (let i = timeInt; i < data.length; i++) {
      range.shift();
      range.push(data[i]);

      const avgPower = this.calculateAvgPower(range);

      if (avgPower > result.bestAverage) {
        result.bestAverage = avgPower;
        result.bestValues = [];
        range.forEach((sample) => {
          result.bestValues.push(sample);
        });
      }
    }
    return result;
  }

  calculateAvgPower(array) {
    const total = array.reduce((acc, dataPoint) => {
      return acc + dataPoint.values.power;
    }, 0);
    return total / (array.length);
  }
}
