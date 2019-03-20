import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EndorseForm from "./EndorseForm";

class ModalExample extends React.Component {
    state = {
        modal: false
    };
    //creates a reference to the form
    formRef = React.createRef();

    componentDidMount = () => {
        this.toggle();
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            id: this.props.skillId,
            endorseId: this.props.endorseId
        });
    };

    render() {
        console.log("values passed to modal", this.props);
        //const vals = this.props.editVals;
        return (
            <div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>{this.props.caption}</ModalHeader>
                    <ModalBody>
                        <EndorseForm
                            ref={this.formRef}
                            edit={this.props.modal}
                            fName={this.props.fName}
                            LName={this.props.lName}
                            optSkillId={this.state.id}
                            getSkill={this.props.get}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() =>
                                this.props.endorseClick(
                                    this.state.endorseId,
                                    this.formRef.current.state
                                )
                            }
                        >
                            {!this.props.edit ? <span> Endorse!</span> : <span>Update </span>}
                            <i className="far fa-smile" />
                        </Button>
                        <Button color="secondary" onClick={() => this.props.handleCancel()}>
                            <span>Cancel </span>
                            <i className="far fa-thumbs-down" />
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;