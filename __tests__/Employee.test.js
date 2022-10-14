const { default: test } = require('node:test');
const Employee = require('../lib/employee');
const employee = new Employee('julia','3518289','juliafritsch04@gmail.com');
// Test for Employee Values (name, id & email)
test('test constructor values for employee', () => {
    expect(employee.name).toBe('julia');
    expect(employee.id).toBe('3518289');
    expect(employee.email).toBe('juliafritsch04@gmail.com');
});
// Name test
test('test for return of getName()', () => {
    expect(employee.getName()).toBe('julia');
});
// ID test
test('test for return of getId()', () => {
    expect(employee.getId()).toBe('3518289');
});
// Email test
test('test for return of getEmail()', () => {
    expect(employee.getEmail()).toBe('juliafritsch04@gmail.com');
});
// Role test
test('test for return of getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});