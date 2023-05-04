export interface IEmployee {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
}

export const dummyEmployeeList : IEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: "Vincent",
    lastName: "Pantia",
    email: "vincent.m.pantia@gmail.com"
}]

export enum PageEnum {
    list,
    add
}