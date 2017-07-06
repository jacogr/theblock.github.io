// GPLv3, Copyright (C) 2017, theBlock, https://theblock.io
// @flow

export default {
  account: {
    text: 'using my selected account'
  },
  balance: {
    text: 'with an available balance of'
  },
  value: {
    text: 'send an amount of',
    empty: 'zero'
  },
  recipient: {
    text: 'to recipient account',
    example: 'e.g. 0x00a329c0648769A73afAc7F9381E08FB43dBEA72'
  },
  data: {
    text: 'add {{data}} as data',
    empty: 'nothing',
    example: 'e.g. 0xb4427263'
  },
  gasLimit: {
    text: 'with {{gasLimit}} gas limit',
    empty: 'estimated'
  },
  gasPrice: {
    text: 'and {{gasPrice}} gas price',
    empty: 'average'
  },
  buttons: {
    send: {
      label: 'I want to make this transfer',
      busy: 'Creating transaction'
    }
  }
};