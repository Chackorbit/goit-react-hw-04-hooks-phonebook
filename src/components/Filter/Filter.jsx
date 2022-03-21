import s from './Filter.module.css';
import React from 'react';
import { nanoid } from 'nanoid';

export default class Filter extends React.Component {
  state = {};

  idFilter = nanoid();

  render() {
    return (
      <div className={s.container}>
        <label htmlFor={this.idFilter} className={s.label}>
          Find by name
        </label>

        <input
          className={s.input}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onSaveFind}
          id={this.idFilter}
        />
      </div>
    );
  }
}
