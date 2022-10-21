// Derives from Employee Class & Extends 
const Employee = require('./employee');
class Manager extends Employee {
    // values; name, id, email and office #
    constructor(name, id, email, officeNo) {
        // parent constructor call with super
        super(name, id, email);
        // new parameter
        this.officeNo = officeNo;
    }
    getOfficeNo() {
        return this.officeNo;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;