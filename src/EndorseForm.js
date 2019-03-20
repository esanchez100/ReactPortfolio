import React from "react";
import styles from "./App.module.css";
import { FormGroup, Input, Label } from "reactstrap";
//import { getSkills } from "./endorse.service";
//import Loader from "./Loader";

class EndorseForm extends React.Component {
    state = {
        lName: "",
        fName: "",
        skills: "",
        modal: false
    };
    componentDidMount = () => {
        this.getListOfSkills();
    };
    checkEditMode = () => {
        if (this.props.edit) {
            console.log("edit mode");
            this.getEditProps();
        } else {
            console.group("not in edit mode");
        }
    };
    getListOfSkills = () => {
        if (this.props.edit) {
            console.log("edit mode");
            this.getEditProps(this.props);
        } else {
            console.group("not in edit mode");
            this.setState({
                edit: false,
                skillId: this.props.optSkillId
            });
        }
    };
    handleInputChange = e => {
        const { name, value } = e.target;
        console.log(name, value);
        this.setState({ [name]: value });
    };
    toggle = () => {
        console.log("form toggle");
        this.props.toggle();
    };
    getEditProps = () => {
        const endorseId = this.props.endorseId;
        const fName = this.props.fName;
        const lName = this.props.lName;
        const optSkillId = this.props.SkillId;

        console.log(endorseId, fName, lName, optSkillId);
        this.setState({
            fName,
            lName,
            optSkillId,
            endorseId
        });
    };
    render() {
        let listOfSkills = this.props.getSkill;
        console.log("props", this.props);
        console.log("state", this.state);

        return (
            <div className={styles.formpretty}>
                <FormGroup>
                    <Label> First Name: </Label>
                    <Input
                        type="text"
                        onChange={this.handleInputChange}
                        placholder="Please enter your name"
                        value={this.state.fName}
                        name="fName"
                        placeholder="Please enter your First Name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label> Last Name: </Label>
                    <Input
                        type="text"
                        name="lName"
                        onChange={this.handleInputChange}
                        placholder="Please enter your name"
                        value={this.state.lName}
                        placeholder="Please enter your Last Name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label> Skill: </Label>
                    <Input
                        type="select"
                        name="skillId"
                        value={this.state.optSkillId}
                        onChange={this.handleInputChange}
                    >
                        <option>Choose a skill...</option>
                        {listOfSkills.map(opt => (
                            <option key={opt.Id} value={opt.Id}>
                                {opt.Skill}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
            </div>
        );
    }
}
export default EndorseForm;