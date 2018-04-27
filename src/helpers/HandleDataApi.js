export default class HandleDataApi {
  calculateBestEffort(data, timeInt, title) {
    const range = data.slice(0, timeInt);
    const initalAverage = this.calculateAvgPower(range);
    const result = {
      title,
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

  getAllGPSLocations(array) {
    return array.reduce((acc, sample) => {
      if (sample.values.positionLong && sample.values.positionLat) {
        acc.push([sample.values.positionLat, sample.values.positionLong]);
        return acc;
      }
      return acc;
    }, []);
  }

  getPowerData(array) {
    return array.reduce((acc, sample) => {
      if (sample.millisecondOffset && sample.values.power) {
        const timeInSeconds = sample.millisecondOffset / 60000;
        acc.push([timeInSeconds, sample.values.power]);
        return acc;
      }
      return acc;
    }, []);
  }

  createSelectionData(array) {
    return array.map((dataSet) => {
      return { row: dataSet[1], column: dataSet[0] };
    });
  }
}
