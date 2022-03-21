import { AiOutlineClose } from 'react-icons/ai';
import s from './ButtonDelete.module.css';

const ButtonDelete = ({ deleteContact, id }) => {
  return (
    <button className={s.btnDelete} onClick={() => deleteContact(id)}>
      <AiOutlineClose />
    </button>
  );
};

export default ButtonDelete;
