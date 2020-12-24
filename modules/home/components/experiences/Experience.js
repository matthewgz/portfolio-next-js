import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Item from '~/modules/home/components/experiences/Item'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Translate } from 'react-localize-redux'
import { useTheme } from '~/modules/core/theme/ThemeProviderSelector'

const useStyles = theme => ({
  content: {
    background: theme.colors.colorLight
  },
  arrow: {
    borderRight: `10px solid  ${theme.colors.colorLight}`
  },
  icon: {
    background: theme.colors.ghostWhite,
    color: 'black',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: `0 0 0 3px ${theme.colors.colorAccent}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`
  }
})

const Experience = ({ company, icon }) => {
  const theme = useTheme({})
  const classes = useStyles(theme)
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={classes.content}
      contentArrowStyle={classes.arrow}
      icon={<Logo src={icon} alt={company} />}
      iconStyle={classes.icon}
      date={
        <Dates>
          <Translate id={`Exp: ${company} Dates`} />
        </Dates>
      }
    >
      <Container>
        <Item
          title={`Exp: ${company} Title`}
          dates={`Exp: ${company} Dates`}
          description={`Exp: ${company} Desc`}
          skill={`Exp: ${company} Skill`}
        />
      </Container>
    </VerticalTimelineElement>
  )
}

Experience.propTypes = {
  company: PropTypes.string,
  icon: PropTypes.string
}

export default Experience

const Container = styled.div``

const Logo = styled.img`
  width: 100%;
`
const Dates = styled.span`
  color: ${props => props.theme.colors.colorDark};
  font-weight: 600;
`
