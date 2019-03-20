import React from "react";
//import Loader from "./Loader";
import { Table, Button } from "reactstrap";
class EndorsementList extends React.Component {
    componentDidMount = () => {
        //this.getAllEndorsements();
    };

    getAllEndorsements = () => {
        this.props.getEndorsements();
    };
    // handleEditing = eList => {
    //   console.log("passing data", eList);
    //   this.props.handleEdit(eList);
    // };
    handleDeleteClick = id => {
        this.props.handleDelete(id);
    };
    render() {
        var moment = require("moment");
        console.log("data passed", this.props);
        const list = this.props.list;
        if (list) {
            return (
                <div className="card">
                    <Table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Skill</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(eList => (
                                <tr key={eList.EndorseId}>
                                    <td>{eList.FirstName}</td>
                                    <td>{eList.LastName}</td>
                                    <td>{eList.SkillName}</td>
                                    <td>{moment(eList.DateModified).format("LL")}</td>
                                    <td>
                                        <div>
                                            <Button onClick={() => this.props.handleEdit(eList)}>
                                                Edit
                      </Button>
                                            <Button
                                                onClick={() => this.handleDeleteClick(eList.EndorseId)}
                                            >
                                                Delete
                      </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return (
                <div>
                    {/* <Loader type="bars" color="grey" /> */}
                </div>
            );
        }
    }
}
export default EndorsementList;