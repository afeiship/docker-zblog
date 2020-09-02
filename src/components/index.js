import nxTreeWalk from '@feizheng/next-tree-walk';
import noop from '@feizheng/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-tree';

export default class ReactTree extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The data source.
     */
    items: PropTypes.array,
    /**
     * Item template.
     */
    template: PropTypes.func,
    /**
     * Child item key.
     */
    itemsKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  static defaultProps = {
    template: noop,
    itemsKey: 'children'
  };

  get childView() {
    const { items, itemsKey, template } = this.props;
    return nxTreeWalk(items, {
      template,
      itemsKey
    });
  }

  render() {
    const { className, items, itemsKey, template, ...props } = this.props;
    return (
      <ul
        data-component={CLASS_NAME}
        data-role="root"
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.childView}
      </ul>
    );
  }
}
