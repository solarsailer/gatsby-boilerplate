import React from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'
import {config} from 'config'

// -------------------------------------------------------------
// Component - Markdown Wrapper.
// -------------------------------------------------------------

export default ({route}) => {
  const page = route.page.data

  return (
    <article className='markdown'>
      <Helmet title={`${page.title} — ${config.siteTitle}`} />

      <header>
        <h1>{page.title}</h1>
        <aside>
          {moment(page.date).format('MMMM D, YYYY')}
        </aside>
      </header>

      <div dangerouslySetInnerHTML={{__html: page.body}} />
    </article>
  )
}
