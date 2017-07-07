import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
       console.log("event.target.value",event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {
      //event.preventDefault();
      console.log("this.state", this.state.inputValue);
  }


//   addSong(type, id, comment) {
//     const species = type + "s";
//     const animalList = this.state[species];
//     const animal = animalList.find(animal => animal.id === +id);
//     animal.comments.push(comment);
//     this.setState({ [species]: animalList });
//   }


  render () {

    return (
        <div className="well">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>New Playlist</legend>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Name</label>
                        <div className="col-xs-10">
                            <input
                                className="form-control"
                                type="text"
                                value = {this.state.inputValue}
                                onChange= {this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                            <button
                            disabled={!this.state.inputValue}
                            disabled={this.state.inputValue.length>16}
                            >
                                    Create Playlist
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
  }
}
