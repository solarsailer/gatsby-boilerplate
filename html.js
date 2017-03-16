import React from 'react'
import {config} from 'config'
import {prefixLink} from 'gatsby-helpers'

// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const BUILD_TIME = new Date().getTime()

// -------------------------------------------------------------
// Component - HTML.
// -------------------------------------------------------------

export default ({body}) => {
  let css
  if (process.env.NODE_ENV === 'production') {
    css = <link rel='stylesheet' href={prefixLink(`/styles.css?t=${BUILD_TIME}`)} />
  }

  return (
    <html>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{config.siteTitle}</title>

        {css}
      </head>
      <body>
        <div id='react-mount' dangerouslySetInnerHTML={{__html: body}} />

        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  )
}
