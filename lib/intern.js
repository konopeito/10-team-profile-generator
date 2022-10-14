const Employee = require('./employee');
class Intern extends Employee {
    // values; name, id, email and office #
    constructor(name, id, email, school) {
        // parent constructor call with super
        super(name, id, email);
        // new parameter
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = "Intern";