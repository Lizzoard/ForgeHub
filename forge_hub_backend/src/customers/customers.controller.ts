import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomerController {
  customerService: CustomersService;

  constructor() {
    this.customerService = new CustomersService();
  }

  @Get()
  listCustomers() {
    return this.customerService.findAll();
  }

  @Post()
  createCustomer(@Body() body: CreateCustomerDto) {
    return this.customerService.create(body.firstName, body.lastName);
  }

  @Get('/:id')
  async listCustomer(@Param('id') id: string) {
    const customer = await this.customerService.findOne(id);

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    return customer;
  }
}
