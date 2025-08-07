import React from 'react'
import { PageProps } from '@/types';
type Customer = {
    id: number,
    name: string,
    email: string
    phone?: string,
    address?: string,
}

type props = PageProps & {
    customer: Customer[]
}

const Index = ({auth, Customer}: PageProps) => {
    return (
        <div>

        </div>
    )
}

export default Index
