import React, { FunctionComponent } from 'react';

import { Severity } from '../../utils/Severity';
import Notification from '../Notification/Notification';
import Button from '../Button/Button';

interface ICookiesNotificationProps {
  onAccpet: () => void;
}

const CookiesNotification: FunctionComponent<ICookiesNotificationProps> = (props) => {
  return (
    <Notification severity={Severity.Info}>
      Drogi Użytkowniku, Niniejsza strona korzysta z plików cookies dla celów statystycznych i marketingowych. “Dowiedz
      się więcej” lub kliknij “Akceptuję”, w celu zaakceptowania wszystkich rodzajów cookies.
      <Button primary onClick={props.onAccpet}>Akceptuje</Button>
    </Notification>
  );
};

export default CookiesNotification;
