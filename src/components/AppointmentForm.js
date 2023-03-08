

function AppointmentForm({ form, setForm, handleSubmit }) {
    console.log(form);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    }

    return(
        <div className='flex flex-col justify-center items-center w-96'>
            <h2 className='text-2xl mb-6 w-full text-center'>Appointment</h2>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex justify-center py-2'>
                    <input
                        id='date'
                        type='date'
                        value={form.date}
                        onChange={handleChange}
                    />
                </div>
                <div className='py-2'>
                    <input className='border-2 w-full'
                        id='title'
                        type='text'
                        placeholder='title'
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div className='py-2'>
                    <textarea className='border-2 w-full'
                        rows='6'
                        id='notes'
                        placeholder='notes'
                        value={form.notes}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
            </form>
        </div>
    );
}

export default AppointmentForm;