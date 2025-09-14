import {formatCurrency} from '../../Scripts/Utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars',() => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('round up to the nearest decimal', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });

  
});