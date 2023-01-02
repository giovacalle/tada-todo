import { PropsWithChildren, useState } from 'react';
import { TitledAlertProps } from '../../../types/alert';

const TitledAlert = ({
  title,
  text,
  type = 'success',
  onClose = () => {},
  children
}: PropsWithChildren<TitledAlertProps>) => {
  const [show, setShow] = useState(true);

  let cssHeader = '';
  let cssBody = '';
  let cssFooter = '';

  switch (type) {
    case 'error':
      cssHeader = 'bg-red-500 text-white';
      cssBody = 'border-red-400 bg-red-100 text-red-700';
      cssFooter = 'border-red-400 bg-red-100 text-red-700';
      break;
    case 'warning':
      cssHeader = 'bg-yellow-500 text-white';
      cssBody = 'border-yellow-400 bg-yellow-100 text-yellow-700';
      cssFooter = 'border-yellow-400 bg-yellow-100 text-yellow-700';
      break;
    case 'success':
      cssHeader = 'bg-green-500 text-white';
      cssBody = 'border-green-400 bg-green-100 text-green-700';
      cssFooter = 'border-green-400 bg-green-100 text-green-700';
      break;
  }

  const closeHandler = () => {
    onClose();
    setShow(false);
  };

  return (
    <>
      {show && (
        <div
          role="alert"
          className="absolute w-[80%] positionated-center text-lef shadow-md animation-centered-from-top">
          <div
            className={`flex items-center justify-between px-4 py-2 rounded-t font-bold ${cssHeader}`}>
            {title}
            <button type="button" onClick={closeHandler}>
              X
            </button>
          </div>
          <div className={`px-4 py-3 border border-t-0 rounded-b ${cssBody}`}>
            <p>{text}</p>
          </div>
          {children && (
            <div
              className={`flex items-center justify-end px-4 py-2 rounded-b font-bold border-x border-b ${cssFooter}`}>
              {children}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TitledAlert;
