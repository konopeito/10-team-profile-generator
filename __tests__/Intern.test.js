const Intern = require('../lib/intern');
const intern = new Intern('julia','3','juliafritsch04@gmail.com', 'Drexel');
test('test to get constructor values from Intern', () => {
    expect(intern.name).toBe('julia');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('juliafritsch04@gmail.com');
    expect(intern.school).toBe('Drexel');
}); 

// Name test
test('test for return of getName()', () => {
    expect(intern.getName()).toBe('julia');
});
// ID test
test('test for return of getId()', () => {
    expect(intern.getId()).toBe('3');
});
// Email test
test('test for return of getEmail()', () => {
    expect(intern.getEmail()).toBe('juliafritsch04@gmail.com');
});
// School test
test('test for return of getSchool()', () => {
    expect(intern.getSchool()).toBe('Drexel');
});
// Role test
test('test for return of getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});