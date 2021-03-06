// GPLv3, Copyright (C) 2017, theBlock, https://theblock.io
// @flow

import { NULL_ADDRESS } from './constants';
import { concatHex, formatAddress, padHex } from './format';

const ADDRESS = '0x00a329c0648769A73afAc7F9381E08FB43dBEA72';

describe('format', () => {
  describe('concatHex', () => {
    it('concats removing extra 0x', () => {
      expect(concatHex(['0x12', '0x34'])).toBe('0x1234');
    });

    it('concats in absense of 0x', () => {
      expect(concatHex(['12', '34'])).toBe('0x1234');
    });

    it('concats wih null values present', () => {
      expect(concatHex(['0x12', null, '0x34'])).toBe('0x1234');
    });
  });

  describe('formatAddress', () => {
    it('returns 0x00..00 for no address', () => {
      expect(formatAddress()).toBe(NULL_ADDRESS);
    });

    it('returns 0x00..00 on invalid address', () => {
      expect(formatAddress('0xnotaddress')).toBe(NULL_ADDRESS);
    });

    it('converts lowercase to the checksummed address', () => {
      expect(formatAddress(ADDRESS.toLowerCase())).toBe(ADDRESS);
    });

    it('converts uppercase to the checksummed address', () => {
      expect(formatAddress(ADDRESS.toUpperCase().replace('0X', '0x'))).toBe(ADDRESS);
    });

    it('returns formatted address on checksum input', () => {
      expect(formatAddress(ADDRESS)).toBe(ADDRESS);
    });

    it('returns formatted address on input without leading 0x', () => {
      expect(formatAddress(ADDRESS.substr(2))).toBe(ADDRESS);
    });
  });

  describe('padHex', () => {
    it('pads uneven digits', () => {
      expect(padHex('a')).toBe('0a');
    });

    it('pads even digits', () => {
      expect(padHex('ab')).toBe('ab');
    });

    it('keeps hex prefix in-tact on conversions', () => {
      expect(padHex('0xa')).toBe('0x0a');
    });
  });
});
