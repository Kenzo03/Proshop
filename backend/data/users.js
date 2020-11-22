import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('abc123',10),
        isAdmin: true
    },
    {
        name: 'John',
        email: 'john@mail.com',
        password: bcrypt.hashSync('abc123',10),
    },
    {
        name: 'Mary',
        email: 'mary@mail.com',
        password: bcrypt.hashSync('abc123',10)
    }
]

export default users