// GPLv3, Copyright (C) 2017, theBlock, https://theblock.io
// @flow

import { observer } from 'mobx-react';
import React from 'react';
import { Interpolate, translate } from 'react-i18next';

import InputTextarea from 'theblock-lib-ui/src/input/textarea';

import { ImportStore } from '../store';

type PropTypes = {
  className?: string,
  store: ImportStore,
  t: (string) => string
};

function Bip ({ className, store, t }: PropTypes): React.Element<any> {
  return (
    <Interpolate
      parent='div'
      i18nKey='keytype.bipPhrase.text'
      inputPhrase={
        <InputTextarea
          example={ t('keytype.bipPhrase.example') }
          isError={ store.hasEmptyPhrase }
          isMaxWidth
          onChange={ store.setPhrase }
          value={ store.phrase }
        />
      }
    />
  );
}

export default translate(['import'])(observer(Bip));
