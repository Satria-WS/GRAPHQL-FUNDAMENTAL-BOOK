import React from "react";
import "./App.css";
import { loadStudentAsync } from "./server";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        };
        this.studentTemplate = [];
    }

    async loadStudents() {
        const studentData = await loadStudentAsync();
        this.setState({
            students: studentData,
        });
        console.log("loadStudents");
    }

    render() {
        return (
            <div>
                <input
                    type="button"
                    value="loadStudents"
                    onClick={this.loadStudents.bind(this)}
                />
                <div>
                    <br />
                    <hr />
                    <table border="3">
                        <thead>
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>college Name</td>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.students.map((s) => {
                                return (
                                    <tr key={s.id}>
                                        <td>{s.firstName}</td>
                                        <td>{s.lastName}</td>
                                        <td>{s.college.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
