import { useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList } from "../../contractors/Employee";
import EmployeeList from "../Employee/EmployeeList";
import AddEmployee from "../Employee/AddEmployee";
import "./Home.style.css"
import EditEmployee from "../Employee/EditEmployee";


const Home = () => {

    //Hook States
    const[employeeList, setEmployeeList] = useState([] as IEmployee[])
    const[shownPage, setShownPage] = useState(PageEnum.list)
    const[dataToEdit, setDataToEdit] = useState(null as IEmployee | null)

    //Handler Functions
    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add);
    }

    const showListPage =  () => {
        setShownPage(PageEnum.list);
    }

    const addEmployeeHnd = (data: IEmployee) => {
        setEmployeeList([...employeeList, data]);
    }

    const deleteEmployee = (data: IEmployee) => {
        //To index from array i,e employeeList
        //Splice that
        //Update new record
        const indexToDelete = employeeList.indexOf(data);
        const temp = [...employeeList];
        temp.splice(indexToDelete, 1);
        setEmployeeList(temp);
    }

    const editEmployee = (data:IEmployee) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    }

    const updateEmployee = (data:IEmployee) => {
        const filteredData = employeeList.filter(x => x.id === data.id)[0];
        const indexToUpdate = employeeList.indexOf(filteredData);
        const temp = [...employeeList];
        temp[indexToUpdate] = data;
        setEmployeeList(temp);
    }


    return (
        <>
            <article className="article-header">
                <header>
                    <h1>React: Simple CRUD Application</h1>
                </header>
            </article>
            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <button className="add-employee-btn" 
                                    onClick={onAddEmployeeClickHnd}>Add Employee</button>
                        <EmployeeList list={employeeList} 
                                      onDeleteClickHnd={deleteEmployee}
                                      onEdit={editEmployee}/>
                    </>
                )}
                {shownPage === PageEnum.add && (
                    <>
                        <AddEmployee onBackBtnClickHnd={showListPage} 
                                     onSubmitClickHnd={addEmployeeHnd}/>
                    </>
                )}
                {shownPage === PageEnum.edit && dataToEdit !== null && (
                    <>
                        <EditEmployee data={dataToEdit} 
                                      onBackBtnClickHnd={showListPage} 
                                      onUpdateClickHnd={updateEmployee}/>
                    </>
                )}
            </section>
        </>
    );
}

export default Home;