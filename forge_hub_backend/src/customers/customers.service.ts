import { CustomersRepository } from './customers.repository';

export class CustomersService {
  customersRepo: CustomersRepository;

  constructor() {
    this.customersRepo = new CustomersRepository();
  }

  findOne(id: string) {
    return this.customersRepo.findOne(id);
  }

  findAll() {
    return this.customersRepo.findAll();
  }

  create(firstName: string, lastName: string) {
    this.customersRepo.create(firstName, lastName);
  }
}
