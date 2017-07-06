import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {

  constructor () {
    super();
    this.state = {
      
    };
  }

  render () {
    
    return (
        <div className="well">
            <form className="form-horizontal">
                <fieldset>
                    <legend>New Playlist</legend>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Name</label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                            <button>
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
