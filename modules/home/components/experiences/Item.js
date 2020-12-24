import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Title from '~/modules/home/components/experiences/Title'
import Description from '~/modules/home/components/experiences/Description'
import Bold from '~/modules/home/components/experiences/Bold'
import { Translate } from 'react-localize-redux'

const Item = ({ title, description, skill }) => (
  <Container>
    <Title>
      <Translate id={title} />
    </Title>
    <Description>
      <Translate id={description} />
    </Description>
    <Description>
      <Bold>
        <Translate id={skill} />
      </Bold>
    </Description>
  </Container>
)

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skill: PropTypes.string
}

export default Item

const Container = styled.div``
