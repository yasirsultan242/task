import React, { Component } from 'react';
import moment from 'moment';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      dueDate: '',
    };
  }
  onChangeUserName(e) {
    this.setState({ userName: e.target.value });
    console.log(this.state.userName);
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onButtonClick() {
    console.log('userName', this.state.userName);
    console.log('password', this.state.password);
  }

  render() {
    const persons = [
      {
        id: 1,
        name: 'Bruce',
        age: 24,
        skill: 'React',
      },
      {
        id: 1,
        name: 'Clark',
        age: 25,
        skill: 'Angular',
      },
      {
        id: 1,
        name: 'Diana',
        age: 28,
        skill: 'Vue',
      },
    ];
    return (
      <div>
        {persons.map((person) => (
          <>
            <h2>{person.age}</h2>
            <h3>{person.skill}</h3>
          </>
        ))}
        <input
          type='datetime-local'
          onChange={(e) => this.setState({ dueDate: e.target.value })}
        />
        <input
          type='text'
          placeholder='userName'
          value={this.state.userName}
          onChange={(e) => this.onChangeUserName(e)}
        />
        <input
          type='password'
          placeholder='password'
          value={this.state.password}
          onChange={(e) => this.onChangePassword(e)}
        />
        <button onClick={() => this.onButtonClick()}>Press Me</button>
      </div>
    );
  }
}
