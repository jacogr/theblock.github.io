// GPLv3, Copyright (C) 2017, theBlock, https://theblock.io
// @flow

export default {
  popup: {
    completed: {
      title: 'Completed',
      text: 'Account {{addressDetails}} has been created'
    },
    busy: {
      title: 'Creating',
      text: 'Busy creating account from the specified details'
    }
  },
  errors: {
    importFail: 'Import error'
  },
  details: {
    text: 'create account from {{selectType}}'
  },
  keytype: {
    bipPhrase: {
      label: 'BIP39 phrase',
      example: 'e.g. seed sock milk update focus rotate barely fade car face mechanic mercy',
      text: 'with the phrase {{inputPhrase}}'
    },
    brainPhrase: {
      label: 'Parity phrase',
      example: 'e.g. neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      text: 'with the phrase {{inputPhrase}}'
    },
    json: {
      label: 'Keystore file',
      file: {
        text: 'from the {{inputFile}} source file'
      },
      password: {
        text: 'unlocked with {{inputPassword}} as password'
      }
    },
    new: {
      label: 'Generated key (new)'
    },
    privateKey: {
      label: 'Private key',
      example: 'e.g. 0x123456789deadbeef9876543210123456789deadbeef',
      text: 'with the key {{inputKey}}'
    }
  },
  storage: {
    text: 'store my account in {{selectStorage}}'
  },
  storagetype: {
    browser: {
      label: 'browser storage',
      text: 'encryping with {{inputPassword}} as password'
    },
    session: {
      label: 'session memory'
    }
  },
  buttons: {
    create: {
      label: 'I want to create this account',
      busy: 'Creating account'
    }
  }
};
