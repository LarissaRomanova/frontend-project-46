import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = [];

  keys.forEach((key) => {
    const data1HasKey = data1.hasOwnProperty(key);
    const data2HasKey = data2.hasOwnProperty(key);
    const value1 = data1[key];
    const value2 = data2[key];

    if (data1HasKey && data2HasKey) {
      _.isEqual(value1, value2) ? result.push(`  ${key}: ${value1}`) : result.push (`- ${key}: ${value1}\n+ ${key}: ${value2}`);
    } else if (data1HasKey) {
      result.push(`- ${key}: ${value1}`);
    } else if (data2HasKey) {
      result.push(`- ${key}: ${value2}`);
    }
  })

  const toPrint = ['{', ...result, '}'].join('\n');
  return toPrint;
};

export { genDiff };
