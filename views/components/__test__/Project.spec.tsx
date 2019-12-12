import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Project from '~/views/components/Project'

describe('Project', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Project />)
    expect(wrap).toMatchSnapshot()
  })

})