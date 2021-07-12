describe('Primitive Values', () => {
  it('should test jest assertions', () => {
    const num = 10;

    expect(num).toBe(10);
    expect(num).toEqual(10);
    expect(num).toBeGreaterThan(9);

    expect(num).toBeCloseTo(9.9999);

    expect(num).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('shoud test jest assertions with objects', () => {
    const person = { name: 'luiz', age: 30 };
    const anotherPerson = { ...person };
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 30);
    expect(person.name).toBe('luiz');
  });
});
