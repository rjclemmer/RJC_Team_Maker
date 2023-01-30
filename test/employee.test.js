const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('test if we can get the employee name', () => {
        const value = 'Robbie Clem';
        const emp = new Employee(value, 3, 'robbie@clem.com');
        expect(emp.getName()).toBe(value);
    });
}

);