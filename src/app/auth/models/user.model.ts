export interface IUserDTO {
    id: number,
    name: string,
    email: string,
    role: 'user' | 'admin'
}