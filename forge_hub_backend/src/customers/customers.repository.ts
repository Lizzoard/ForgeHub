import { readFile, writeFile } from 'fs/promises';

export class CustomersRepository {
  async findOne(id: string) {
    const contents = await readFile('customers.json', 'utf8');
    const customers = JSON.parse(contents);

    return customers[id];
  }

  async findAll() {
    const contents = await readFile('customers.json', 'utf-8');
    const customers = JSON.parse(contents);
    return customers;
  }

  async create(firstName: string, lastName: string) {
    const contents = await readFile('customers.json', 'utf-8');
    const customers = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    customers[id] = { id, firstName: firstName, lastName: lastName };
    await writeFile('customers.json', JSON.stringify(customers));
  }
}
