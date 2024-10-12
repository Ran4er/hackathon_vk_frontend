import { lightFormat } from 'date-fns';
import { Calendar, Checkbox, FormItem, FormLayoutGroup, LocaleProvider, Select } from '@vkontakte/vkui';
import { useState } from 'react';

const CalendarEvents = () => {
  const [value, setValue] = useState(() => new Date());
  const [enableTime, setEnableTime] = useState(false);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(false);
  const [locale, setLocale] = useState('ru');
  const [size, setSize] = useState('m');

  return (
    <LocaleProvider value={locale}>
        <Calendar
        value={value}
        onChange={setValue}
        enableTime={enableTime}
        disablePast={disablePast}
        disableFuture={disableFuture}
        disablePickers={disablePickers}
        showNeighboringMonth={showNeighboringMonth}
        size={size}
        listenDayChangesForUpdate={listenDayChangesForUpdate}
        />
    </LocaleProvider>
  );
};

export default Calendar;