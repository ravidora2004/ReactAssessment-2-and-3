import React from 'react'
import PropTypes from 'prop-types'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({}) =>
  (
    <section className="main">
      {  }
      
      <VisibleTodoList />
      {   }
      
    </section>
  )

MainSection.propTypes = {

  actions: PropTypes.object.isRequired
}

export default MainSection;