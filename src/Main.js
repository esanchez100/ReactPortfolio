import React, { Component } from "react";
import "./App.css";
import styles from "./App.module.css";
import "./parallax.css";
import { Button, Card, CardBody, CardTitle, CardLink, Badge } from "reactstrap";
import Modal from "./Modal";
import EndorsementList from "./EndorsementList";

class Main extends Component {
    state = {
        skillList: "",
        endorsementList: "",
        aboutMeShow: false,
        contactMeShow: false,
        projectsShow: false,
        emailShow: false,
        callTextShow: false,
        viewSkills: false,
        showEndorsementList: false,
        edit: false,
        editFN: "",
        editLN: "",
        editSkillId: "",
        editEndorseId: ""
    };

    aboutMeClick = () => {
        //console.log("about me clicked");
        this.setState({
            aboutMeShow: !this.state.aboutMeShow,
            projectsShow: false,
            contactMeShow: false,
            callTextShow: false,
            emailShow: false
        });
    };
    projectsClick = () => {
        //console.log("projects clicked");
        this.setState({
            projectsShow: !this.state.projectsShow,
            contactMeShow: false,
            aboutMeShow: false,
            callTextShow: false,
            emailShow: false
        });
    };
    contactMeClick = () => {
        //console.log("contact me clicked");
        this.setState({
            contactMeShow: !this.state.contactMeShow,
            projectsShow: false,
            aboutMeShow: false
        });
    };
    emailClicked = () => {
        this.setState({ emailShow: !this.state.emailShow, callTextShow: false });
    };
    callTextClicked = () => {
        //console.log("call me or text me");
        this.setState({ callTextShow: !this.state.callTextShow, emailShow: false });
    };
    viewLinkedin = () => {
        window.location.href =
            "https://www.linkedin.com/in/emily-sanchez-b3093085/";
    };
    viewGithub = () => {
        window.location.href = "https://github.com/esanchez100";
    };
    viewSkills = () => {
        //console.log("get skills");
        if (this.state.viewSkills === true) {
            this.setState({ viewSkills: false });
        } else {
            //console.log("view skills is false");
            this.setState({ viewSkills: true });
            this.getListedSkills();
        }
    };
    endorseMeClick = id => {
        if (!id) {
            console.log("skill was clicked", id);
            this.setState({ endorseMe: true, clickedSkill: id });
        } else {
            console.log("endorse was clicked", id);
            this.setState({ modal: true, clickedSkill: id });
        }
    };

    getListedSkills = () => {
        // getSkills().then(response => {
        //     this.setState({ skillList: response.data });
        // });
    };
    handleCancel = () => {
        console.log("Cancel this");
        this.setState({
            modal: false,
            endorseMe: false
        });
    };
    getAllEndorsements = () => {
        //console.log("getting all endorsements");
        // getEndorsements().then(response => {
        //     this.setState({ endorsementList: response.data });
        // });
    };
    addEndorseClick = data => {
        //console.log("state data from form", data);
        const req = {
            FirstName: data.fName,
            LastName: data.lName,
            SkillId: data.optSkill
        };
        //console.log("adding endorsement", req);
        // createEndorsement(req).then(response => {
        //     this.setState({
        //         modal: false,
        //         endorseMe: false,
        //         showEndorsementList: !this.state.showEndorsementList
        //     });
        // });
    };
    viewAllEndorsementsClick = () => {
        console.log("View all endorsements clicked");
        // this.getAllEndorsements();
        // this.setState({ showEndorsementList: !this.state.showEndorsementList });
    };

    handleDelete = id => {
        console.log(" delete id ", id);
        // 
    };
    //========================================================
    //==============================================

    handleEditClick = req => {
        console.log("APP editing this id: ", req);
        this.setState({
            edit: true,
            editSkillId: req.SkillId,
            editEndorseId: req.EndorseId,
            editFN: req.FirstName,
            editLN: req.LastName
        });
    };
    confirmEditClick = (id, info) => {
        console.log("new data to update", id, info);
        // updateEndorsement(id, data).then(response => {
        //   console.log(response);
        // const data = {
        //   id: req.EndorseId,
        //   FirstName: req.FirstName,
        //   LastName: req.LastName,
        //   SkillId: req.SkillId
        // };
        // });
    };

    render() {
        const skills = this.state.get;
        let emojis = require('emojis');
        console.log("App State: ", this.state);
        return (
            <div>
                {/* ===================About Me================== */}
                <div className="bgimg-1">
                    <div onClick={this.aboutMeClick} className="caption">
                        <span className="border">About Me</span>
                    </div>
                </div>
                {this.state.aboutMeShow && (
                    <div
                        style={{
                            color: "#777",
                            backgroundColor: "white",
                            textAlign: "center",
                            padding: "50px 80px"
                        }}
                    >
                        <h3 style={{ textAlign: "center" }}>Emily Sanchez</h3>
                        <p>Full Stack Developer</p>
                        {/* ===================collapsable section============ */}
                        <p>
                            <Button onClick={this.viewSkills}>View my skills </Button>
                        </p>
                        {this.state.viewSkills && (
                            <div>
                                <div className=" card card-body">
                                    <div className={styles.a}>
                                        {skills ? (
                                            skills.map(skill => (
                                                <div className={styles.item} key={skill.Id}>
                                                    <Badge
                                                        onClick={() => this.endorseMeClick(skill.Id)}
                                                        color="dark"
                                                        style={{ fontSize: "10pt", padding: "7px" }}
                                                    >
                                                        {skill.Skill}
                                                    </Badge>
                                                </div>
                                            ))
                                        ) : (
                                                <div>
                                                    {/* <Loader type="balls" color="grey" /> */}
                                                </div>
                                            )}
                                        {/* ===========Endorse me button=========== */}
                                        <div>
                                            <Button
                                                onClick={() => this.endorseMeClick()}
                                                color="warning"
                                            >
                                                <i className="fas fa-thumbs-up" />{" "}
                                                <span> Endorse Me</span>
                                            </Button>
                                            <Button
                                                onClick={this.viewAllEndorsementsClick}
                                                color="primary"
                                            >
                                                <i className="fas fa-binoculars" />{" "}
                                                <span> View All Endorsements</span>
                                            </Button>
                                        </div>
                                        {/* =============Skill Endorsement============ */}
                                        {this.state.modal && this.state.skillList && (
                                            <Modal
                                                caption="Thank you for endorsing me on this skill"
                                                modal={this.state.modal}
                                                endorseClick={this.addEndorseClick}
                                                handleCancel={this.handleCancel}
                                                skillId={this.state.clickedSkill}
                                                edit={this.state.edit}
                                                get={this.state.skillList}
                                            />
                                        )}
                                        {/* ========Endorse me============ */}
                                        <div>
                                            {this.state.endorseMe && this.state.skillList && (
                                                <Modal
                                                    caption="Endorse Me"
                                                    modal={this.state.endorseMe}
                                                    endorseClick={this.addEndorseClick}
                                                    handleCancel={this.handleCancel}
                                                    skillId={this.state.clickedSkill}
                                                    edit={this.state.edit}
                                                    get={this.state.skillList}
                                                />
                                            )}
                                        </div>
                                        {/* ========Edit Endorsements============ */}
                                        {this.state.edit && this.state.skillList && (
                                            <Modal
                                                caption="Edit this Endorsement"
                                                modal={this.state.edit}
                                                endorseClick={this.confirmEditClick}
                                                handleCancel={this.handleCancel}
                                                skillId={this.state.editSkillId}
                                                fName={this.state.editFN}
                                                lName={this.state.editLN}
                                                endorseId={this.state.editEndorseId}
                                                get={this.state.skillList}
                                            />
                                        )}
                                        {/* ========List of Endorsements============ */}
                                        {this.state.showEndorsementList && (
                                            <EndorsementList
                                                list={this.state.endorsementList}
                                                handleDelete={this.handleDelete}
                                                getEndorsements={this.getAllEndorsements}
                                                handleEdit={this.handleEditClick}
                                            />
                                        )}
                                        {/* End of endorsements */}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div className="bgimg-2">
                    <div onClick={this.projectsClick} className="caption">
                        <span className="border">Projects</span>
                    </div>
                </div>

                {this.state.projectsShow && (
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                color: "#777",
                                backgroundColor: "white",
                                textAlign: "center",
                                padding: "50px 80px"
                            }}
                        >
                            <div className="cardContainer">
                                <Card
                                    className={styles.card}
                                    style={{ border: "grey solid 1px", borderRadius: "25px" }}
                                >
                                    <CardBody>
                                        <CardTitle>Grolo Site</CardTitle>
                                    </CardBody>
                                    <img
                                        className={styles.centerimage}
                                        width="25%"
                                        src="http://i67.tinypic.com/vyy1eh.png"
                                        alt=""
                                    />
                                    {/* <CardText /> */}
                                    <CardBody>
                                        <CardLink href="#">Visit Grolo Site</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                )}
                {/* ===================Contact Me================== */}
                <div className="bgimg-3">
                    <div className="caption">
                        <span onClick={this.contactMeClick} className="border">
                            Contact Me
            </span>
                    </div>
                </div>
                {this.state.contactMeShow && (
                    <div
                        style={{
                            color: "#777",
                            backgroundColor: "white",
                            textAlign: "center",
                            padding: "50px 80px"
                        }}
                    >
                        <div>
                            <Button onClick={this.emailClicked}>
                                <i className="fas fa-at" /> Email
              </Button>
                            {this.state.emailShow && (
                                <p>
                                    Email:{" "}
                                    <a href="mailto:esaloj1@gmail.com">esaloj1@gmail.com</a>
                                </p>
                            )}
                            <Button onClick={this.callTextClicked}>
                                <i className="fas fa-mobile-alt" />
                                <span> Call Me or </span>
                                <i className="fas fa-sms" />
                                <span> Text Me</span>
                            </Button>
                            {this.state.callTextShow && <p>424-388-0958</p>}
                            <Button onClick={this.viewLinkedin}>
                                View my <i className="fab fa-linkedin" /> page{" "}
                            </Button>
                            <Button onClick={this.viewGithub}>
                                View my <i className="fab fa-github" /> GitHub
              </Button>
                        </div>
                    </div>
                )}

                <div className="bgimg-1">
                    <div className="caption">
                        <span
                            style={{
                                backgroundColor: "transparent",
                                fontSize: "25px",
                                color: "#f7f7f7"
                            }}
                        >
                            Stay grateful {emojis.unicode(':smiley:')}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
