import { Employee } from "./Employee"


export interface Company{
    name: string
    address: string
    url: string
    employees: Employee[]
}