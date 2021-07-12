import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('lucas', 'santos', '089.175.989-28');
    expect(sut).toHaveProperty('firstName', 'lucas');
    expect(sut).toHaveProperty('lastName', 'santos');
    expect(sut).toHaveProperty('cpf', '089.175.989-28');
  });

  it('should have methods to get name and idn for individualCustomer', () => {
    const sut = createIndividualCustomer('lucas', 'santos', '089.175.989-28');
    expect(sut.getName()).toBe('lucas santos');
    expect(sut.getIDN()).toBe('089.175.989-28');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('EmpresaGigante', '000-33');
    expect(sut).toHaveProperty('name', 'EmpresaGigante');
    expect(sut).toHaveProperty('cnpj', '000-33');
  });

  it('shoud have methos to get name and idn for enterpriseCustomer', () => {
    const sut = createEnterpriseCustomer('EmpresaGigante', '000-33');
    expect(sut.getName()).toBe('EmpresaGigante');
    expect(sut.getIDN()).toBe('000-33');
  });
});
