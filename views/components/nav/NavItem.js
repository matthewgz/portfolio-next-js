import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Translate } from 'react-localize-redux'
import Link from 'next/link'

const NavItem = ({ page, isSelected, setSelectedPage }) => {
  return isSelected ? (
    <SelectedContainer>
      <Translate id={page} />
    </SelectedContainer>
  ) : (
    <Link href={`#${page}`}>
      <Container
        data-test-id="nav-link"
        onClick={() => {
          setSelectedPage(page)
        }}
      >
        <Translate id={page} />
      </Container>
    </Link>
  )
}

NavItem.propTypes = {
  page: PropTypes.string,
  isSelected: PropTypes.bool,
  setSelectedPage: PropTypes.func
}

export default NavItem

const Container = styled.a`
  line-height: ${props => props.theme.navContentMinHeight};
  font-size: ${props => props.theme.fontSizes.XXL};
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.colorDarken};
    border: none;
  }

  @media screen and (max-width: 800px) {
    font-size: ${props => props.theme.fontSizes.XL};
    line-height: 2;
    border-bottom: none;
  }
`
const SelectedContainer = styled(Container)`
  color: ${props => props.theme.colors.colorDarken};
  border: none;
`
