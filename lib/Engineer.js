const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email);
    this.github =github; 
  };
  getRole = () => 'Engineer';
  getGithub = () => this.github;
    // getGithub (){ return this.github; }??????
}

module.exports = Engineer;