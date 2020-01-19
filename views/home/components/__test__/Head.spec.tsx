import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import Head from '~/views/home/components/Head'

describe('Head', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Head />)
    expect(wrap).toMatchSnapshot()
  })

})
