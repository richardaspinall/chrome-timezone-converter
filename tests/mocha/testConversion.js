const conversion = require('../../libs/conversion');

var assert = require('assert');

describe('Testing conversion lib', function () {
  it('Should return Date Time (2021-01-01 19:00:00) from a string', function () {
    assert.strictEqual(conversion.getDateTime('2021-01-01 19:00:00'), '2021-01-01 19:00:00');
  });

  it('Should return a converted Date Time', function () {
    assert.deepStrictEqual(conversion.toDateTime('1609488000', 'America/Los_Angeles'), '2021-01-01 00:00:00 PDT');
  });

  it('Should return Unix Time (10 digits only) from a string', function () {
    assert.deepStrictEqual(
      conversion.getUnixTime('1609488000', 'America/Los_Angeles', 'America/Los_Angeles'),
      '1609488000'
    );
  });

  it('Should return null because the string does not have a Date Time', function () {
    assert.deepStrictEqual(conversion.toUnixTime('Blah', 'America/Los_Angeles'), {
      unixTime: null,
      stringToReplace: null,
    });
  });

  describe('Should return an object with a Unix Time and the Date Time to replace', function () {
    it('Given only a Date Time string', function () {
      assert.deepStrictEqual(conversion.toUnixTime('2021-01-01 00:00:00', 'America/Los_Angeles'), {
        unixTime: 1609488000,
        stringToReplace: '2021-01-01 00:00:00',
      });
    });

    it('Given a Date Time string with padding', function () {
      assert.deepStrictEqual(conversion.toUnixTime('test 2021-01-01 00:00:00 test', 'America/Los_Angeles'), {
        unixTime: 1609488000,
        stringToReplace: '2021-01-01 00:00:00',
      });
    });
  });
});