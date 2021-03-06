// GPLv3, Copyright (C) 2017, theBlock, https://theblock.io
// @flow

import { observer } from 'mobx-react';
import React, { type Element } from 'react';
import { Interpolate, translate } from 'react-i18next';

import ImgIdentity from '@theblock/lib-ui/src/img/identity';
import InputAddress from '@theblock/lib-ui/src/input/address';
import InputStatic from '@theblock/lib-ui/src/input/static';

import chains from '../../../store/chains';
import TransactionType from '../../../store/transactions/transaction';

import styles from './info.scss';

type PropTypes = {
  className?: string,
  item: TransactionType,
  t: (string) => string
};

function Info ({ className, item, t }: PropTypes): Element<any> {
  return (
    <section>
      <div className={ styles.root }>
        <div className={ styles.address }>
          <ImgIdentity
            size='large'
            value={ item.txFromFormatted }
          />
          <InputAddress
            hideIcon
            isReadOnly
            value={ item.txFromFormatted }
          />
        </div>
        <div className={ styles.value }>
          <InputStatic value={ item.txTokenValueFormatted || '0.0' } />
          <InputStatic value={ item.txTokenType } />
        </div>
        <div className={ styles.address }>
          <ImgIdentity
            size='large'
            value={ item.txTokenToFormatted }
          />
          <InputAddress
            hideIcon
            isReadOnly
            value={ item.txTokenToFormatted }
          />
        </div>
      </div>
      <Interpolate
        i18nKey='confirmTx'
        parent='div'
        className={ styles.extraInfo }
        txData={
          <span>
            <InputStatic value={ item.txDataFormatted || t('confirmDataNone') } />
          </span>
        }
        txGasLimit={
          <span>
            <InputStatic value={ item.txGasLimitFormatted } />
          </span>
        }
        txGasPrice={
          <span>
            <InputStatic value={ item.txGasPriceFormatted } />
          </span>
        }
        txTotal={
          <span>
            <InputStatic value={ item.txTotalFormatted } />
            <InputStatic value={ chains.selected.token } />
          </span>
        }
      />
    </section>
  );
}

export default translate(['tx'])(observer(Info));
