import { api } from './api';
import type { BookingFormValues } from './validation/bookingSchema';

type BookingResponse = {
    message: string;
};

export const createBookingRequest = async (
    camperId: string,
    data: BookingFormValues
): Promise<BookingResponse> => {
    const response = await api.post<BookingResponse>(
        `/campers/${camperId}/booking-requests`,
        data
    );

    return response.data;
};
