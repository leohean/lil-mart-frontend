export interface User{
    id?: number,
    name: string,
    email: string,
    password: string,
    birth: string | Date,
    cpf: string,
    role: string
}