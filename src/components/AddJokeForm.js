import React, {Component} from "react"

export default class AddJokeForm extends Component {
  render (){
    return(
      <form onSubmit={this.props.onSubmit}>
        <input
        className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Setup of the joke"
          name="setup"
          value={this.props.values.setup}
          onChange={this.props.onChange}
        />
        <input
        className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Punchline of the joke"
          name="punchline"
          value={this.props.values.punchline}
          onChange={this.props.onChange}
        />

        <button className="btn btn-outline-default btn-lg btn-dark" type="submit">{this.props.buttonName}</button>
      </form>
    )
  }
}