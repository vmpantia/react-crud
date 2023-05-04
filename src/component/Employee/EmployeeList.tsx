import { IEmployee } from "../../contractors/Employee";
import "./EmployeeList.style.css"

type Props = {
    list: IEmployee[]
}

const EmployeeList = (props: Props) => {
    const { list } = props;
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    {list.map(employee => {
                        return (
                            <tr key={employee.id}>
                                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button>View</button>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
}

export default EmployeeList;