import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './modal.css'
import { IFormInput } from '../interfaces';


interface Props {
  show: boolean;
  onClose: () => void;
  onSave: (data: IFormInput) => void;
}

const AddConnectionModal: React.FC<Props> = ({ show, onClose, onSave }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    onSave(data);
    onClose();
    reset();
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={() => {
          onClose();
          reset();
        }}>&times;</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Database Name:
            <input type="text" {...register('name', { required: true })} />
            {errors.name && <span className="errorText">This field is required</span>}
          </label>
          <label>
            URL:
            <input type="text" {...register('url', { required: true })} />
            {errors.url && <span className="errorText">This field is required</span>}
          </label>
          <label>
            Username:
            <input type="text" {...register('username', { required: true })} />
            {errors.username && <span className="errorText">This field is required</span>}
          </label>
          <label>
            User Password:
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <span className="errorText">This field is required</span>}
          </label>
          <label>
            Type:
            <select {...register('type', { required: true })}>
              <option value="">Select a Type</option>
              <option value="Snowflake">Snowflake</option>
              <option value="Trino">Trino</option>
              <option value="MySQL">MySQL</option>
            </select>
            {errors.type && <span className="errorText">This field is required</span>}
          </label>
          <button type="submit">Add Connection</button>
        </form>
      </div>
    </div>
  );
};

export default AddConnectionModal;
