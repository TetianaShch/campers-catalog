import { NextResponse } from 'next/server';
import { z } from 'zod';

import { bookingSchema } from '@/lib/validation/bookingSchema';

const bookingRequestSchema = bookingSchema.extend({
    camperId: z.string().min(1, 'Camper ID is required'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = bookingRequestSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { message: 'Invalid booking data' },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: 'Booking request accepted' },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { message: 'Invalid request body' },
            { status: 400 }
        );
    }
}