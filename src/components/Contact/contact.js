import React, {useState,useEffect} from "react";
import './contact.scss'


const Contact = () => {
    const [personData, setPersonData] =useState({
        name: '',
        email: '',
        message: ''
    })
    const [error, setError] = useState({});
    const [submitting, setSubmitting] = useState(false)


    const handleChange = (e) => {
        const {name, value} = e.target;

        setPersonData((prevState) => {
            return{
               ...prevState,
                [name]: value
            }
        })
    }

    const validationForm = (inputField) => {
        let errors = {};
        const nameRegex = /^[a-zA-Z\s'-]+$/;
        const mailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!mailRegex.test(inputField.email)) {
            errors.email = 'Email is not valid';
        }
        if (!nameRegex.test(inputField.name)) {
            errors.name = 'Name is invalid. Only letters, spaces, hyphens, and apostrophes are allowed.';
        }
        if (inputField.message.length === 0){
            errors.message = 'Please type something'
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validationForm(personData);
        setError(errors);
        setSubmitting(true);
    };

    const finishSubmit = () => {
        console.log(personData);
        setPersonData({
            name: '',
            email: '',
            message: ''
        });
        setSubmitting(false);
    };
    useEffect(() => {
        if (Object.keys(error).length === 0 && submitting) {
            finishSubmit();
        }
    }, [error]);

    return(
        <>
            <section className='section-contact-style' id='contact'>
                <div>
                    <h1 className='contact-title'> Contact </h1>
                    <p className='contact-text'> Send me a message </p>
                        <form className='contact-form-style' onSubmit={handleSubmit}>
                            <label className='contact-label'> Name </label>
                            <input className='contact-input-style' type='text' name='name' value={personData.name} onChange={handleChange}
                                   placeholder='Name'/>
                            {error.name && <p className='error-text'> {error.name} </p>}
                            <label className='contact-label'>Email</label>
                            <input className='contact-input-style' type='email' name='email' value={personData.email} onChange={handleChange}
                                   placeholder='Email'/>
                            {error.email && <p className='error-text'>{error.email} </p>}
                            <label className='contact-label'> Message </label>
                            <input className='contact-input-style-msg' type='text' name='message' value={personData.message} onChange={handleChange}
                                   placeholder='Message'/>
                            {error.message && <p className='error-text'> {error.message} </p>}
                            <div className='contact-btn'>
                                <button className='contact-btn-style' type='submit'> Send </button>
                            </div>
                        </form>
                </div>
            </section>
        </>
    )
}

export default Contact;