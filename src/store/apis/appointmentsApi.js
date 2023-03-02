import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appointmentsApi = createApi({
    reducerPath: 'appointments',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder) {
        return {
            fetchAppointments: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map((appointment) => {
                        return { type: 'Appointment', id: appointment.id };
                    });
                    return tags;
                },
                query: (() => {
                    return {
                        url: '/appointments',
                        method: 'GET',
                    };
                }),
            }),
            addAppointment: builder.mutation({
                invalidatesTags: (result, error, arg) => {

                },
                query() {

                },
            }),
            editAppointment: builder.mutation({

            }),
            deleteAppointment: builder.mutation({

            }),
        };
    },
});

export const { useFetchAppointmentsQuery, useAddAppointmentMutation, useEditAppointmentMutation, useDeleteAppointmentMutation } = appointmentsApi;
export { appointmentsApi };