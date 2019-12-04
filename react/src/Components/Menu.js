import React from 'react';
import { Menu } from 'semantic-ui-react';

class Menu1 extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Item 1
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Item 2
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Item 3
        </Menu.Item>
      </Menu>
    )
  }
}


class Menu2 extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='i4'
          active={activeItem === 'i4'}
          onClick={this.handleItemClick}
        >
          Item 4
        </Menu.Item>

        <Menu.Item
          name='i5'
          active={activeItem === 'i5'}
          onClick={this.handleItemClick}
        >
          Item 5
        </Menu.Item>

        <Menu.Item
          name='i6'
          active={activeItem === 'i6'}
          onClick={this.handleItemClick}
        >
          Item 6
        </Menu.Item>
      </Menu>
    )
  }
}

class Menu3 extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu >
        <Menu.Item
          name='i7'
          active={activeItem === 'i7'}
          onClick={this.handleItemClick}
        >
          Item 7
        </Menu.Item>

        <Menu.Item
          name='i8'
          active={activeItem === 'i8'}
          onClick={this.handleItemClick}
        >
          Item 8
        </Menu.Item>

        <Menu.Item
          name='i9'
          active={activeItem === 'i9'}
          onClick={this.handleItemClick}
        >
          Item 9
        </Menu.Item>
      </Menu>
    )
  }
}

const Menus = { Menu1, Menu2, Menu3 };

export default Menus;