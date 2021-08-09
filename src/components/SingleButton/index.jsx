import './styles.css'

export const SingleButton = ({ text, onClick, disabled }) => {
  return <button disabled={disabled} onClick={onClick} className='button'>{text}</button>;
};
