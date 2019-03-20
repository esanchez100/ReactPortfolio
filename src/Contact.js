import React, { Component } from "react";
import "./App.css";
import "./parallax.css";
import { Button, Label, Input, Form, FormGroup, Table } from "reactstrap";

class Contact extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        message: "",
        showMessages: false,
        showForm: false,
        jumbotron: true
    };
    // componentDidMount = () => {
    //   this.getMessages();
    // };
    // Jumbotron functions
    handleSubmitMessage = () => {
        if (this.state.jumbotron) {
            // console.log("jumbotron submit");
            //console.log("new submit ");
            this.setState({
                jumbotron: false,
                showForm: true,
                showMessages: false,
                formId: ""
            });
        } else if (this.state.showMessages) {
            //  console.log(" message view submit");
            this.setState({
                jumbotron: false,
                showForm: true,
                showMessages: false,
                formId: ""
            });
        }
    };
    getMessages = () => {
        // getFormData().then(response => {
        //   //console.log("getting all messages");
        //   this.setState({
        //     allMessages: response.data
        //   });
        // });
        console.log("get messages running");
    };
    viewAllMessages = () => {
        this.setState({
            jumbotron: false,
            showForm: false,
            showMessages: !this.state.showMessages
        });
    };
    //-----------------Form functions---------------
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        //console.log("values: ", name, value);
        //console.log("state input change", this.state);
    };

    handleSubmit = () => {
        const data = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            Gender: this.state.gender,
            Message: this.state.message
        };
        console.log(" Handle submit clicked");
        //post
        // createFormData(data).then(response => {
        //   // console.log("Created record!");
        //   this.getMessages();
        //   this.setState({
        //     showForm: false,
        //     showMessages: true
        //   });
        // });
    };
    //Message section functions
    handleEditClick = data => {
        //console.log("update this id ", data.FormId, data);
        this.setState({
            showForm: true,
            jumbotron: false,
            showMessages: false,
            firstName: data.FirstName,
            lastName: data.LastName,
            email: data.Email,
            gender: data.Gender,
            message: data.Message,
            formId: data.FormId
        });
    };
    handleUpdateClick = () => {
        const data = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            Gender: this.state.gender,
            Message: this.state.message,
            FormId: this.state.formId
        };
        // console.log("data eing updated ", data);
        // updateFormData(data).then(response => {
        //   //  console.log("updated record...getting all messages");
        //   this.getMessages();
        //   this.clearFrom();
        //   this.setState({
        //     showForm: false,
        //     showMessages: true
        //   });
        // });
    };
    handleDeleteClick = id => {
        //console.log("delete this id ", id);
        // deleteFormData(id).then(a => {
        //   NotificationManager.success(
        //     "Success!",
        //     "You have successfully deleted a record!"
        //   );
        //   this.getMessages();
        // this.setState({
        //   showMessages: true
        // });
        // });
    };
    handleCancel = () => {
        if (this.state.showForm) {
            // console.log("cancel form");
            this.setState({
                jumbotron: false,
                showForm: false,
                showMessages: true,
                formId: ""
            });
        } else {
            //console.log("cancel message view");
            this.setState({
                jumbotron: true,
                showForm: false,
                showMessages: false,
                formId: ""
            });
        }
    };
    clearFrom = () => {
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            message: "",
            formId: ""
        });
    };

    //========================================================
    //==============================================

    render() {
        const messages = this.state.allMessages;
        return (
            <div style={{ backgroundColor: "black" }}>
                {/* -----------Jumbotron------------ */}
                {/* {this.state.jumbotron && (
          <div
            className="jumbotron"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <h1 className="display-4">Hello, there!</h1>
            <p className="lead">Thank you for visiting this site.</p>
            <hr className="my-4" />
            <p>
              We hope you find these messages helpful. If there is something you
              would like to add, please feel free to add a message.
            </p>
            <p className="lead">
              <Button
                color="success"
                style={{ border: "solid white 1px", marginRight: "5px" }}
                onClick={this.handleSubmitMessage}
              >
                <i className="fas fa-paper-plane" />
                <span> Submit Message</span>
              </Button>
              <Button
                className="btn btn-dark"
                style={{ border: "solid white 1px" }}
                onClick={this.viewAllMessages}
              >
                <i className="fas fa-binoculars" />{" "}
                <span> View All Messages</span>
              </Button>
            </p>
          </div>
        )} */}
                {/* -----------End of Jumbotron------------ */}

                {/* -----------Form------------ */}
                {this.state.showForm && (
                    <div
                        className="card"
                        style={{
                            marginLeft: "350px",
                            marginRight: "350px",
                            padding: "50px",
                            width: "50%",
                            height: "50%"
                        }}
                    >
                        <Form>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="Please enter your First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Please enter your Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Please enter your email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Gender (optional)</Label>
                                <Input
                                    type="select"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleInputChange}
                                >
                                    <option>Choose one..</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            {!this.state.formId ? (
                                <Button color="success" onClick={this.handleSubmit}>
                                    <i className="fas fa-paper-plane" />
                                    <span> Submit</span>
                                </Button>
                            ) : (
                                    <Button color="info" onClick={this.handleUpdateClick}>
                                        <i className="far fa-edit" />
                                        <span> Update</span>
                                    </Button>
                                )}
                            <Button
                                style={{ backgroundColor: "#622DCA", border: "#622DCA" }}
                                onClick={this.handleCancel}
                            >
                                <i className="fas fa-ban" />
                                <span> Cancel</span>{" "}
                            </Button>
                        </Form>
                    </div>
                )}
                {/* -----------End of Form------------ */}
                {/* -----------List of Messages------------ */}
                {/* {this.state.showMessages && this.state.allMessages && (
          <div
            className="card"
            style={{
              alignContent: "center",
              marginLeft: " 20px",
              marginRight: "20px"
            }}
          >
            <div
              className="card-body"
              style={{
                alignContent: "center",
                marginLeft: " 20px",
                marginRight: "20px"
              }}
            >
              <Table>
                <thead style={{ backgroundColor: "SteelBlue", color: "white" }}>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Message</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map(message => (
                    <tr key={message.FormId}>
                      <td>{message.FirstName}</td>
                      <td>{message.LastName}</td>
                      <td>{message.Message}</td>

                      <td>
                        <div>
                          <Button
                            color="warning"
                            style={{ marginRight: "2px" }}
                            onClick={() => this.handleEditClick(message)}
                          >
                            <i className="far fa-edit" />
                            <span> Edit</span>
                          </Button>
                          <Button
                            color="danger"
                            onClick={() =>
                              this.handleDeleteClick(message.FormId)
                            }
                          >
                            <i className="fas fa-minus-circle" />{" "}
                            <span> Delete</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div>
              <Button color="primary" onClick={this.handleCancel}>
                <i className="fas fa-long-arrow-alt-left" />
                <span> Back</span>
              </Button>
              <Button
                color="success"
                // style={{ backgroundColor: "#622DCA", border: "#622DCA" }}
                // style={{ backgroundColor: "#622DCA", border: "#622DCA" }}
                onClick={this.handleSubmitMessage}
              >
                <i className="fas fa-paper-plane" />{" "}
                <span> Submit Message</span>
              </Button>
            </div>
          </div>
        )} */}
                {/* -----------End of Messages------------ */}
            </div>
        );
    }
}

export default Contact;