export type UserType = {
  id: string;
  name: string
  email: string
  type: 'common' | 'producer' | 'admin'
}

export const user: UserType = {
  id: 'b7h0Pa',
  name: 'Thomas Henrique',
  email: 'thomas@gmail.com',
  type: "common"
}