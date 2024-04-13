/* eslint-disable react/prop-types */
// import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div>
      <h2 className='text-center'>{title}</h2>
    </div>
  )
}

Header.prototype = {
    title: PropTypes.string
}

export default Header
