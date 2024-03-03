import { EnterpriseCustomerProtocol, IndividualCustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstname: string;
  lastname: string;
  cpf: string;
  cnpj: string;

  constructor(firstname: string, lastname: string, cpf: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cpf = cpf;
    this.cnpj = '';
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
