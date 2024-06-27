import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    name,
    type = 'text',
    label,
    error,
    className = '',
    register,
    options,
    placeholder = 'Ingrese un texto',
  } = props;

  return (
    <fieldset className={`form-floating ${className}`}>
      <input
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={`${name}-input`}
        placeholder={placeholder}
        type={type}
        {...register(name, options)}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      <div className='invalid-feedback'>{error?.message}</div>
    </fieldset>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  className: PropTypes.string,
  register: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Input;
