import { useState } from "react";
import { IEmployee } from "../../contractors/Employee";
import "./EmployeeList.style.css"
import EmployeeModal from "./EmployeeModal";

type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data:IEmployee) => void;
    onEdit: (data:IEmployee) => void;
}

const EmployeeList = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null);
    
    const viewEmployee = (data:IEmployee) => {
        setShowModal(true);
        setDataToShow(data);
    }

    const onCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div>
                <article>
                    <h3 className="list-header">Employee List</h3>
                </article>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {list.map(employee => {
                        return (
                            <tr key={employee.id}>
                                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={ () => viewEmployee(employee)}>View</button>
                                    <button onClick={ () => onEdit(employee)}>Edit</button>
                                    <button onClick={ () => onDeleteClickHnd(employee)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
                {showModal &&  dataToShow !== null && 
                    (<EmployeeModal onClose={onCloseModal} data={dataToShow}/>)
                }
            </div>
        </>
    );
}

export default EmployeeList;

function useSate(arg0: boolean) {
    throw new Error("Function not implemented.");
}
