<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;


class CustomerController extends Controller
{
    // Get All Customers
    public function index()
    {
        $customers = Customer::all();
        return Inertia::render('Customers/Index', ['customers' => $customers]);
    }

    // Create New Customer
    public function create()
    {
        return Inertia::render('Customers/Create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email,',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string',
        ]);
        $customer = Customer::create($validated);

        return redirect()->route('customers.index')->with(['message', 'Customer Created Successfully', 'data', $validated]);
    }

    // Edit Customer

    public function edit(Customer $customer)
    {
        return Inertia::render('Customers/Edit', ['customers', $customer]);
    }
    public function update(Request $request, Customer $customer)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email,' . $customer->id,
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string',,
        ]);

        $customer->update($validated);
        return redirect()->route('customers.index')->with(['message', 'Customer Edit Successfully', 'data', $validated]);
    }

    // Delete Customers
    public function destroy(Customer $customer)
    {
        $customer->delete();
        return redirect()->route('customers.index')->with(['message', 'Customer Deleted Successfully', 'data', $customer]);
    }
}
