import React from 'react';
import styles from '@/styles/components/Contact.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../partials/Button';

type Props = {};
type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: Here we can write the logic to send the form data to the server or API

    console.log(data);
    reset();
  };
  return (
    <div id={'contact'} className={styles._}>
      <div className={styles.wrapper}>
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <label>
              <span>Name:</span>
              <input type="text" {...register('name', { required: true })} />
              {errors.name && <span>This field is required</span>}
            </label>
            <label>
              <span>Email:</span>
              <input type="email" {...register('email', { required: true })} />
              {errors.email && <span>This field is required</span>}
            </label>
          </div>
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
      </div>
    </div>
  );
}
