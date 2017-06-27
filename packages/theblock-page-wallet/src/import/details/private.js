// GPLv3, Copyright (C) 2017, theBlock, https://theblock.io
// @flow

import { observer } from 'mobx-react';
import React from 'react';
import { Interpolate, translate } from 'react-i18next';

import InputHex from 'theblock-lib-ui/src/input/hex';

import { ImportStore } from '../store';

type PropTypes = {
  className?: string,
  store: ImportStore,
  t: (string) => string
};

function PrivateKey ({ className, store, t }: PropTypes): React.Element<any> {
  return (
    <Interpolate
      parent='div'
      i18nKey='keytype.privateKey.text'
      inputKey={
        <InputHex
          example={ t('keytype.privateKey.example') }
          isError={ store.hasInvalidPrivateKey }
          isMaxWidth
          onChange={ store.setPrivateKey }
          value={ store.privateKey }
        />
      }
    />
  );
}

export default translate(['import'])(observer(PrivateKey));
