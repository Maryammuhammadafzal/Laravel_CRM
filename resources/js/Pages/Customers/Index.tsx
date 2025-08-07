
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { PageProps } from '@/types';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface Props extends PageProps {
  customers: Customer[];
}

export default function Index({ user, customers }: Props) {
  return (
    <AuthenticatedLayout
      user={user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Customers</h2>}
    >
      <Head title="Customers" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6">
              <Link href={route('customers.create')}>
                <Button className="mb-4">Add New Customer</Button>
              </Link>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer: any) => (
                    <TableRow key={customer.id}>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.phone || '-'}</TableCell>
                      <TableCell>{customer.address || '-'}</TableCell>
                      <TableCell>
                        <Link href={route('customers.edit', customer.id)}>
                          <Button variant="outline" className="mr-2">Edit</Button>
                        </Link>
                        <Link
                          href={route('customers.destroy', customer.id)}
                          method="delete"
                          as="button"
                        >
                          <Button variant="destructive">Delete</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}