import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Controller('customers')
export class CustomerController {
  @Get()
  listCustomers() {}

  @Post()
  createCustomer(@Body() body: CreateCustomerDto) {
    console.log(body);
  }

  @Get('/:id')
  listCustomer(@Param('id') id: string) {
    console.log(id);
  }
}
