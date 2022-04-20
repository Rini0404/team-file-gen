class Employee {
  constructor(name, id, email){
    this.name = name; 
    this.id = id;
    this.email = email;
  };
  getId = () => this.id;
  getName = () => this.name;
  getEmail = () => this.email; 
  getRole = () => 'Employee'
};

module.exports = Employee;
// parent