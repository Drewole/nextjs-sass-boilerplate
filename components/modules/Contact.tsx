import { useEffect, useState } from 'react';
import styles from '@/styles/components/Contact.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../partials/Button';

type Props = {};
type FormValues = {
  name: string;
  email: string;
  phone: string;
  schoolName: string;
  programsOffered: string;
  message: string;
};

export default function Contact({}: Props) {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: Here we can write the logic to send the form data to the server or API
    //alert the user that the form was submitted and include the data
    setSuccess(true);
    alert('Form submitted: ' + JSON.stringify(data));
    console.log(data);

    reset();
  };
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success === true]);
  return (
    <div id={'contact'} className={styles._}>
      <div className={styles.wrapper}>
        <h2>Contact Us</h2>
        <p className={styles.description}>
          Have questions about our programs or want to get involved? Send us a
          message!
        </p>

        {success ? (
          <div className={styles.success}>
            <h3>Thank you for your submission!</h3>
            <p>We will be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <label>
                <span>Name:</span>
                <input type="text" {...register('name', { required: true })} />
                {errors.name && <span>This field is required</span>}
              </label>
              <label>
                <span>Email:</span>
                <input
                  type="email"
                  {...register('email', { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </label>
            </div>
            <div className={styles.row}>
              <label>
                <span>Phone:</span>
                <input type="text" {...register('phone', { required: true })} />
                {errors.phone && <span>This field is required</span>}
              </label>
              <label>
                <span>School Name</span>
                <input
                  type="text"
                  {...register('schoolName', { required: true })}
                />
                {errors.schoolName && <span>This field is required</span>}
              </label>
            </div>
            <label className={styles.programs}>
              <span>Nursing Programs Offered:</span>
              <textarea {...register('programsOffered', { required: true })} />
              {errors.programsOffered && <span>This field is required</span>}
            </label>
            <label className={styles.message}>
              <span>Message:</span>
              <textarea {...register('message', { required: true })} />
              {errors.message && <span>This field is required</span>}
            </label>
            <Button alt className={styles.submit} type="submit">
              Submit
            </Button>
            {/* <button type="submit">Send</button> */}
          </form>
        )}
      </div>
    </div>
  );
}
