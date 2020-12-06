export const optionsPerCurrency = {
  // 'KRW': {
  //   symbol: '₩',
  //   initialValue: 1000000
  // },
  'USD': {
    symbol: '$',
    initialValue: 1000
  },
  'BTC': {
    symbol: 'Ƀ',
    initialValue: 1
  }
}

export const initialCurrencies = [
  // {
  //   name: 'KRW',
  //   symbol: '₩'
  // },
  {
    name: 'USD',
    symbol: '$'
  },
  {
    name: 'BTC',
    symbol: 'Ƀ'
  }
];


export const chartTypes = [
  {
    name: 'day',
    text: 'one day',
    unit: '5 minutes'
  },
  {
    name: 'week',
    text: 'one week',
    unit: '30 minutes'
  },
  {
    name: 'month',
    text: 'one month',
    unit: '2 hours'
  },
  {
    name: 'year',
    text: '1 year',
    unit: 'one day'
  },
  {
    name: 'all',
    text: 'all',
    unit: 'one day'
  }
];
export const coinsInHome = [
  'BTC',
  'BCH',
  'ETH',
  'ETC',
  'LTC',
  'XRP',
  'DASH',
  'XMR'
];