import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTree from '../src/main';
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
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-tree">
        <ReactTree template={template} items={this.state.items} />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
