const Employee = require('./__tests__/Employee.test.js');


it('should create a new Employee role' () => {
  const employee = new Employee('Rene', 0404, 'Reneortega2468@gmail.com');
  
  expect(employee.name).toEqual(expect.any(string));
    expect(employee.email).toEqual(expect.any(string));
      expect(employee.id).toEqual(expect.any(number));
        expect(employee.role).toEqual(expect.any(employee)) ;
});

// do for id, name, email and getRole

it('should create a new id for employee' () => {
    const employee = new Employee('Rene', 0404, 'Reneortega2468@gmail.com');

  expect(employee.id).toEqual(expect.any(number));
  // getId for emp
  });
  
  it('should create a new name for employee' () => {
    const employee = new Employee('Rene', 0404, 'Reneortega2468@gmail.com');
    
    expect(employee.name).toEqual(expect.any(string));
    //name
    });
    
    it('should create a new email for employee' () => {
    const employee = new Employee('Rene', 0404, 'Reneortega2468@gmail.com');
      expect(employee.email).toEqual(expect.any(string));
        
//email
  
});

//role of emp
it('should create a new role for employee' () => {
    const employee = new Employee('Rene', 0404, 'Reneortega2468@gmail.com');
            expect(employee.role).toEqual(expect.any(employee)) ;
});
    
