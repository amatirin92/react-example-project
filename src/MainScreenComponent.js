import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class FormPage extends React.Component {
constructor(props){
  super(props);
  this.state = {username: ''};
  this.changeUsername = this.changeUsername.bind(this);
}

changeUsername(e) { 
  this.setState({username: e.target.value})
}

render(){

    return (
    <MDBContainer>
    <div className="main-screen-spacing">
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h4 text-center mb-4">Hello {this.state.username} </p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              {this.state.username}
            </label>
            <input
              type="text"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={this.changeUsername}
              value = {this.state.username}
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit">Submit</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>

  );
};
}

export default FormPage;