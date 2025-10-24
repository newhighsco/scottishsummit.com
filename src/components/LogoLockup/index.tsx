import { Image } from '@newhighsco/chipset'
import classNames from 'classnames'
import React, { type FC } from 'react'

import config from '~config'
import logoUrl from '~images/logo.svg'

import styles from './LogoLockup.module.scss'

const { name } = config

interface Props {
  className?: string
}

const LogoLockup: FC<Props> = ({ className }) => (
  <Image
    className={classNames(styles.root, className)}
    src={logoUrl}
    width={1832}
    height={2022}
    alt={name}
    priority
  />
)

export default LogoLockup
export { LogoLockup }
