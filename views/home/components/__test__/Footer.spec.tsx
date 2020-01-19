import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import Footer from '~/views/home/components/Footer'

describe('Footer', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Footer />)
    expect(wrap).toMatchSnapshot()
  })

})