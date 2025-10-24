import Color from 'colorjs.io'
import React, { type FC } from 'react'

import colors from '~styles/colors.module'

const WCAG21_RATIO = 4.5

const getContrast = (
  background: string,
  foreground: string
): [number, boolean] => {
  const contrast =
    Math.floor(
      new Color(background).contrast(new Color(foreground), 'WCAG21') * 100
    ) / 100

  return [contrast, contrast >= WCAG21_RATIO]
}

interface Props {
  hideInsufficient?: boolean
}

const ConstractingColors: FC<Props> = ({ hideInsufficient = true }) => {
  return (
    <>
      {Object.entries(colors).map(([title, background]) => (
        <div key={background} style={{ background, padding: '1em' }}>
          {Object.entries(colors).map(([subtitle, color]) => {
            if (color === background) return null

            const [contrast, sufficient] = getContrast(background, color)

            if (hideInsufficient && !sufficient) return null

            return (
              <p
                key={color}
                style={{
                  color,
                  textDecoration: !sufficient ? 'line-through' : undefined
                }}
                aria-disabled={!sufficient}
                data-contast={contrast}
              >
                {subtitle} on {title}
              </p>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default { component: ConstractingColors, parameters: { layout: 'none' } }

export const Contrasting = {}
