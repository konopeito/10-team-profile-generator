const Engineer = require('../lib/engineer');
const engineer = new Engineer('julia','3518289','juliafritsch04@gmail.com', 'jfritsch04');
test('test to get constructor values from engineer', () => {
    expect(engineer.name).toBe('julia');
    expect(engineer.id).toBe('3518289');
    expect(engineer.email).toBe('juliafritsch04@gmail.com');
    expect(engineer.github).toBe('jfritsch04');
}); 

// Name test
test('test for return of getName()', () => {
    expect(engineer.getName()).toBe('julia');
});
// ID test
test('test for return of getId()', () => {
    expect(engineer.getId()).toBe('3518289');
});
// Email test
test('test for return of getEmail()', () => {
    expect(engineer.getEmail()).toBe('juliafritsch04@gmail.com');
});
// Github test
test('test for return of getGithub()', () => {
    expect(engineer.getGithub()).toBe('jfritsch04');
});
// Role test
test('test for return of getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});