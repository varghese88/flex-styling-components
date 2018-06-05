import Flex from './flex';
import React from 'react';

export class Text extends React.Component {
    render() {
  
      return (
        <Flex className={this.props.className}>
          {this.props.children}
        </Flex>
      );
    }
  }

 