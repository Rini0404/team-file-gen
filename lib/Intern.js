const Employee = require('./Employee')

class Intern extends Employee {
  constructor (name, id, email, school) {
    // super passes the info already there, dont hav tot rewrite the this.mambaJmaba
    super(name, id, email);
    this.school = school; 
  };
  getSchool () { 
    return this.school; 
  };
  getRole () { 
    return  'Intern'; 
  }
}