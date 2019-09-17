import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import MenuItems from './menu-items'
import PropTypes from 'prop-types'

export default function Layout({ children }) {
  return (
    <Container>
      <Menu fixed="top">
        <Menu.Header>
          <Menu.Item>TRIPLE Admin</Menu.Item>
        </Menu.Header>

        <MenuItems />
      </Menu>

      <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        {children}
      </div>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}