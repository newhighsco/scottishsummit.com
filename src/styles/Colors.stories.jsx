import Color from 'colorjs.io'
import { bool } from 'prop-types'
import React from 'react'

import colors from '~styles/colors.module'

const WCAG21_RATIO = 4.5

const getContrast = (background, foreground) => {
  background = new Color(background)
  foreground = new Color(foreground)

  const contrast =
    Math.floor(background.contrast(foreground, 'WCAG21') * 100) / 100

  return [contrast, contrast >= WCAG21_RATIO]
}

const ConstractingColors = ({ hideInsufficient = true }) => {
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

ConstractingColors.propTypes = { hideInsufficient: bool }

export default { component: ConstractingColors, parameters: { layout: 'none' } }

export const Contrasting = {}
