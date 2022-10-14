const Employee = require('./employee');
class Engineer extends Employee {
    // values; name, id, email and office #
    constructor(name, id, email, github) {
        // parent constructor call with super
        super(name, id, email);
        // new parameter
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = "Engineer";