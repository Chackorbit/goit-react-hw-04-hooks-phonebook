import s from './ContactList.module.css';
import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';

const ContactList = ({ findByName, deleteContact }) => {
  const fullList = findByName();

  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {fullList.length < 1 ? (
          <p>We dont have contacts</p>
        ) : (
          fullList.map(el => (
            <ContactItem
              key={nanoid()}
              name={el.name}
              number={el.number}
              id={el.id}
              deleteContact={deleteContact}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ContactList;

// Statistics.propTypes = {
//   good: propTypes.number,
//   neutral: propTypes.number,
//   bad: propTypes.number,
// };
