/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { SignatureVerifierMuxer, SignatureVerifierMuxerInterface } from '../SignatureVerifierMuxer'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'domainSeparator',
        type: 'bytes32',
      },
      {
        internalType: 'contract ISafeSignatureVerifier',
        name: 'newVerifier',
        type: 'address',
      },
    ],
    name: 'setDomainVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'handler',
        type: 'address',
      },
    ],
    name: 'setFallbackHandler',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'safe',
        type: 'address',
      },
      {
        name: 'domainSeparator',
        type: 'bytes32',
      },
    ],
    name: 'domainVerifiers',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as const

export class SignatureVerifierMuxer__factory {
  static readonly abi = _abi
  static createInterface(): SignatureVerifierMuxerInterface {
    return new utils.Interface(_abi) as SignatureVerifierMuxerInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SignatureVerifierMuxer {
    return new Contract(address, _abi, signerOrProvider) as SignatureVerifierMuxer
  }
}