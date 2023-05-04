import { useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList } from "../../contractors/Employee";
import EmployeeList from "../Employee/EmployeeList";
import AddEmployee from "../Employee/AddEmployee";
import "./Home.style.css"


const Home = () => {

    //Hook States
    const[employeeList, setEmployeeList] = useState(dummyEmployeeList as IEmployee[])
    const[shownPage, setShownPage] = useState(PageEnum.list)

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
                        <button onClick={onAddEmployeeClickHnd}>Add Employee</button>
                        <EmployeeList list={employeeList}/>
                    </>
                )}
                {shownPage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployeeHnd}/>}
            </section>
        </>
    );
}

export default Home;