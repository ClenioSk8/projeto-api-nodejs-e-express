const connection = require('./connection')

const getall = async() => {
    const tasks = await connection.execute('SELECT * FROM tasks')
    return tasks
}

module.exports = {
    getall
}