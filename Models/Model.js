const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    id: Number,
    name: String,
    username: String
})

module.exports = model('user', UserSchema)


//{
//   message_id: 943,
//   from: {
//     id: 5569308398,
//     is_bot: false,
//     first_name: 'ㅤㅤㅤ',
//     last_name: 'ㅤㅤㅤㅤ',
//     username: 'Sirojoff',
//     language_code: 'en'
//   },
//   chat: {
//     id: 5569308398,
//     first_name: 'ㅤㅤㅤ',
//     last_name: 'ㅤㅤㅤㅤ',
//     username: 'Sirojoff',
//     type: 'private'
//   },
//   date: 1656441599,
//   text: 'd'
// }