import { Token } from '@conedex/core-sdkv2'
import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import React, { FC } from 'react'

// import { ImportToken } from '../SearchModal/ImportToken'

interface TokenWarningModal {
  isOpen: boolean
  tokens: Token[]
  onConfirm: () => void
}

const TokenWarningModal: FC<TokenWarningModal> = ({ isOpen, tokens, onConfirm }) => {
  return <HeadlessUiModal.Controlled isOpen={isOpen} onDismiss={onConfirm}></HeadlessUiModal.Controlled>
}

export default TokenWarningModal
