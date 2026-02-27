import { classNames, Image } from '@newhighsco/chipset'
import { string } from 'prop-types'
import React from 'react'

import config from '~config'
import logoUrl from '~images/logo.svg'

import styles from './LogoLockup.module.scss'

const { name } = config

const LogoLockup = ({ className }) => (
  <Image
    className={classNames(styles.root, className)}
    src={logoUrl}
    width={1832}
    height={2022}
    alt={name}
    priority
  />
)

LogoLockup.propTypes = { className: string }

export default LogoLockup
export { LogoLockup }
