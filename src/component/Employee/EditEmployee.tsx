import { useState } from "react";
import { IEmployee } from "../../contractors/Employee";
import "./EmployeeForm.style.css"
type Props = {
    data:IEmployee;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IEmployee) => void;
}

const EditEmployee = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);

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
        const updatedData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    }

    return (
        <>
            <div className="form-container">
                <div>
                    <h3>Edit Employee Form</h3>
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
                        <button type="submit">Update Employee</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditEmployee;