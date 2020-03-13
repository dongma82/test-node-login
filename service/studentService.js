let student = require('../dao/studentDao');

function selectAgeAndSex(age, sex, success) {
    student.selectAgeAndSex(age, sex,success)
}

function selectName() {
    student.selectName()
}
function login(num,psw,success) {
    student.login(num,psw,success)
}

module.exports = {
    selectName,
    selectAgeAndSex,
    login
}
