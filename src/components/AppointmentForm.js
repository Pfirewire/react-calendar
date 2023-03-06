

function AppointmentForm({ form, setForm, handleSubmit }) {
    console.log(form);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    }

    return(
        <div>
            <h3>Create Appointment</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        id='title'
                        type='text'
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='date'>Date</label>
                    <input
                        id='date'
                        type='date'
                        value={form.date}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='notes'>Notes</label>
                    <textarea
                        id='notes'
                        value={form.notes}
                        onChange={handleChange}
                    >

                    </textarea>
                </div>
            </form>
            Appointment Form
        </div>
    );
}

export default AppointmentForm;