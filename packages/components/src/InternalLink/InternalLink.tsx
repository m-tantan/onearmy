/* eslint-disable no-restricted-imports */
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'theme-ui'

import type { LinkProps as RouterLinkProps } from 'react-router-dom'
import type { LinkProps as ThemedUILinkProps } from 'theme-ui'

export type Props = RouterLinkProps & ThemedUILinkProps

export const InternalLink = (props: Props) => {
  return (
    <Link as={RouterLink} {...props}>
      {props.children}
    </Link>
  )
}
