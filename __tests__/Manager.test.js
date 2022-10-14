// const { default: test } = require('node:test');
const Manager = require('../lib/manager');
const manager = new Manager('julia','1','juliafritsch04@gmail.com', '123');
test('test to get constructor values from manager', () => {
    expect(manager.name).toBe('julia');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('juliafritsch04@gmail.com');
    expect(manager.officeNo).toBe('123');
}); 

// Name test
test('test for return of getName()', () => {
    expect(manager.getName()).toBe('julia');
});
// ID test
test('test for return of getId()', () => {
    expect(manager.getId()).toBe('1');
});
// Email test
test('test for return of getEmail()', () => {
    expect(manager.getEmail()).toBe('juliafritsch04@gmail.com');
});
// Office # test
test('test for return of getOfficeNo()', () => {
    expect(manager.getOfficeNo()).toBe('123');
});
// Role test
test('test for return of getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});