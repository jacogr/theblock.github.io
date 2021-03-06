// GPLv3, Copyright (C) 2017, theBlock, https://theblock.io
// @flow

import BN from 'bn.js';

import { ZERO_ETHER, NULL_ADDRESS } from './constants';
import { createSha3Raw } from './sha3';
import { isAddressValid, hasHexPrefix } from './validate';

export function formatAddress (_address: ?string): string {
  if (!_address) {
    return NULL_ADDRESS;
  }

  const address = _address.replace('0x', '').toLowerCase();

  if (!isAddressValid(`0x${address}`)) {
    return NULL_ADDRESS;
  }

  const hash: string = createSha3Raw(address);
  let result: string = '';

  for (let index: number = 0; index < 40; index++) {
    result = `${result}${parseInt(hash[index], 16) > 7 ? address[index].toUpperCase() : address[index]}`;
  }

  return `0x${result}`;
}

export function formatFloat (value: BN, decimals?: number = 18, format?: number = decimals, fixed?: boolean = false): string {
  let strValue: string;

  strValue = (value: BN).toString(10);

  if (strValue.length < decimals) {
    strValue = `${ZERO_ETHER}${strValue}`.slice(-1 * decimals);
  }

  let prefix: string = strValue.substr(0, strValue.length - decimals) || '0';

  while (prefix.length > 1 && prefix[0] === '0') {
    prefix = prefix.substr(1);
  }

  const parts: Array<string> = [prefix];

  if (format !== 0) {
    let suffix: string = strValue.slice(-1 * decimals).substr(0, format) || '0';

    if (!fixed) {
      while (suffix.length > 1 && suffix[suffix.length - 1] === '0') {
        suffix = suffix.substr(0, suffix.length - 1);
      }
    }

    parts.push(suffix);
  }

  return parts.join('.');
}

export function padHex (hex: string): string {
  if (hasHexPrefix(hex)) {
    return `0x${padHex(removeHexPrefix(hex))}`;
  }

  if (hex && hex.length % 2) {
    return `0${hex}`;
  }

  return hex;
}

export function removeHexPrefix (hex?: ?string): string {
  if (hex) {
    if (hasHexPrefix(hex)) {
      return hex.substr(2);
    } else {
      return hex;
    }
  }

  return '';
}

export function trimPhrase (phrase: string): string {
  return phrase
    .toLowerCase()
    .split(/\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length)
    .join(' ');
}

export function concatHex (_hex: Array<?string>): string {
  return `0x${_hex.map(removeHexPrefix).join('')}`;
}
