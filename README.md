# react-tree
> React tree.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-tree
```

## update
```shell
npm update @feizheng/react-tree
```

## properties
| Name      | Type   | Required | Default    | Description                           |
| --------- | ------ | -------- | ---------- | ------------------------------------- |
| className | string | false    | -          | The extended className for component. |
| items     | array  | false    | -          | The data source.                      |
| template  | func   | false    | noop       | Item template.                        |
| itemsKey  | union  | false    | 'children' | Child item key.                       |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-tree/dist/style.scss";

  // customize your styles:
  $react-tree-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactTree from '@feizheng/react-tree';
  import './assets/style.scss';

  const template = ({ item, independent }, cb) => {
    if (independent) {
      return (
        <div key={item.value} className="is-node is-leaf">
          <label className={'is-label'}>{item.label}</label>
        </div>
      );
    } else {
      return (
        <div key={item.value} className={'is-node'}>
          <label className="is-label">{item.label}</label>
          <div className="is-nodes">{cb()}</div>
        </div>
      );
    }
  };

  class App extends React.Component {
    state = {
      items: [
        {
          icon: 'm1-icon',
          label: 'Menu1',
          value: 'm1',
          children: [
            {
              icon: 'm1-1-icon',
              label: 'Menu1-1',
              value: 'm1-1',
              children: [
                {
                  icon: 'm1-1-1-icon',
                  label: 'Menu-1-1',
                  value: 'm1-1-1'
                },
                {
                  icon: 'm1-1-2-icon',
                  label: 'Menu-1-2',
                  value: 'm1-1-2'
                }
              ]
            }
          ]
        },
        {
          icon: 'm2-icon',
          label: 'Menu2',
          value: 'm2'
        },
        {
          icon: 'mxx-icon',
          label: '-',
          value: '-'
        },
        {
          disabled: false,
          icon: 'm3-icon',
          label: 'Menu3',
          value: 'm3'
        }
      ]
    };

    render() {
      return (
        <div className="app-container">
          <ReactTree template={template} items={this.state.items} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-tree/


## license
Code released under [the MIT license](https://github.com/afeiship/react-tree/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-tree
[version-url]: https://npmjs.org/package/@feizheng/react-tree

[license-image]: https://img.shields.io/npm/l/@feizheng/react-tree
[license-url]: https://github.com/afeiship/react-tree/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-tree
[size-url]: https://github.com/afeiship/react-tree/blob/master/dist/react-tree.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-tree
[download-url]: https://www.npmjs.com/package/@feizheng/react-tree
