import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Card } from 'semantic-ui-react'

const CustomCardSlide2 = ({ index, ...cardProps }) => (
  <Slide
    style={{
      margin: '0.4rem',
    }}
    index={index}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        style={{
          height: '260px',
          display: 'flex',
          alignItems: 'center',
          border: 'solid',
          borderColor: 'white',
          borderRadius: '0.15rem',
          width: '90%',
          margin: '0.5rem',
        }}
        fluid
        {...cardProps}
      />
    </div>
  </Slide>
)

CustomCardSlide2.propTypes = {
  index: PropTypes.number.isRequired,
}

export default CustomCardSlide2
