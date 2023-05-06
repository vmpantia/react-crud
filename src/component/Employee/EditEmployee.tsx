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
    const [employee, setEmployee] = useState<IEmployee>(data);


    const onEmployeePropChangedHandler = (e:any) => {
        setEmployee(data => {
            return {...data, [e.target.name]: [e.target.value]}
        });
    }

    const onSubmitBtnClickHnd = (e:any) => {
        e.preventDefault();
        const updatedData: IEmployee = {
            id: data.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email
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
                        <input type="text" name="firstName" value={employee.firstName} onChange={onEmployeePropChangedHandler}/>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" name="lastName" value={employee.lastName} onChange={onEmployeePropChangedHandler}/>
                    </div>
                    <div>
                        <label>Email Add.: </label>
                        <input type="text"name="email" value={employee.email} onChange={onEmployeePropChangedHandler}/>
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