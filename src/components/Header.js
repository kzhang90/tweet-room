import React from 'react';
import { Link } from 'react-router';

import Title from './Header/Title';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Title title={this.props.title}/>
      </div>
    );
  }
}