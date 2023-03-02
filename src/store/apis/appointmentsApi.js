import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appointmentsApi = createApi({
    reducerPath: 'appointments',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder) {
        return {
            fetchAppointments: builder.query({

            }),
            addAppointment: builder.mutation({

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