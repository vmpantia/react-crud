import { useState } from "react";
import "./EmployeeForm.style.css"
import { IEmployee } from "../../contractors/Employee";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IEmployee) => void;
}

const AddEmployee = (props: Props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onFirstNameChangedHnd = (e:any) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangedHnd = (e:any) => {
        setLastName(e.target.value);
    }

    const onEmailChangedHnd = (e:any) => {
        setEmail(e.target.value);
    }

    const onSubmitBtnClickHnd = (e:any) => {
        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    }

    return (
        <>
            <div className="form-container">
                <div>
                    <h3>Add Employee Form</h3>
                </div>
                <form onSubmit={onSubmitBtnClickHnd}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" value={firstName} onChange={onFirstNameChangedHnd}/>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" value={lastName} onChange={onLastNameChangedHnd}/>
                    </div>
                    <div>
                        <label>Email Add.: </label>
                        <input type="text" value={email}  onChange={onEmailChangedHnd}/>
                    </div>
                    <div>
                        <button onClick={onBackBtnClickHnd}>Back</button>
                        <button type="submit">Add Employee</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddEmployee;