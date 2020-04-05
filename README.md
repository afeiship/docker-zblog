# react-tree
> React tree.

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
  import ReactTree from '@feizheng/react-tree';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  const template = ({ item, independent }, cb) => {
    if (independent) {
      return (
        <li key={item.value} className="is-node is-leaf">
          <label className={'is-label'}>{item.label}</label>
        </li>
      );
    } else {
      return (
        <li key={item.value} className={'is-node'}>
          <label className="is-label">{item.label}</label>
          <ul className="is-nodes">{cb()}</ul>
        </li>
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
