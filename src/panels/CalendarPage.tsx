import { FC, useState } from 'react';
import { Panel, Group, Card, FixedLayout, TabbarItem, Tabbar, Button } from '@vkontakte/vkui';
import Calendar from 'react-calendar';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28HomeOutline, Icon24UsersOutline, Icon36CoinsStacks3Outline, Icon28CalendarOutline } from '@vkontakte/icons';
import 'react-calendar/dist/Calendar.css'; // Библиотека для календаря

import "../output.css";

export const CalendarPage: FC = ({}) => {
  const routeNavigator = useRouteNavigator();
  const [selectedDate, setSelectedDate] = useState<Date | [Date, Date] | null>(new Date());

  // Пример данных событий
  const events = [
    {
      date: '2024-11-20',
      title: 'Бал в ИТМО',
      category: 'be friendly',
      points: 200,
      image: '../assets/ball.jpg',
    },
    {
      date: '2024-10-12',
      title: 'Хакатон VK Mini Apps x ITMO Hack',
      category: 'be pro',
      points: 500,
      image: '../assets/vk_hack.jpg',
    },
  ];

  // Фильтрация событий по выбранной дате
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      selectedDate instanceof Date &&
      eventDate.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]
    );
  });

  return (
    <Panel>
      <Group>
        <div className="px-4 pb-24 bg-gray-50">
          {/* Заголовок страницы */}
          <div className="flex justify-between items-center my-4">
            <h1 className="text-2xl font-bold">Календарь</h1>
            <div className="flex space-x-2">
              <Button mode="primary" size="m" className="rounded-full bg-pink-500 text-white">be healthy</Button>
              <Button mode="primary" size="m" className="rounded-full bg-pink-500 text-white">be pro</Button>
              <Button mode="primary" size="m" className="rounded-full bg-pink-500 text-white">be eco</Button>
            </div>
          </div>

          {/* Календарь */}
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="w-full border-none mb-4"
            tileClassName={({ date, view }) =>
              events.some(event => event.date === date.toISOString().split('T')[0])
                ? 'bg-pink-500 text-white rounded-full'
                : undefined
            }
          />

          {/* Карточки событий */}
          {filteredEvents.length ? (
            filteredEvents.map((event) => (
              <Card key={event.date} mode="shadow" className="mb-4">
                <div className="p-4 flex flex-col">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex justify-between w-full">
                    <span className={`px-3 py-1 rounded-full text-sm uppercase ${event.category === 'be pro' ? 'bg-blue-500' : 'bg-green-500'} text-white`}>
                      {event.category}
                    </span>
                    <span className="text-pink-500 font-bold">{event.points}</span>
                  </div>
                  <div className="mt-2 text-lg font-bold">{event.title}</div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center text-gray-500">Нет событий на выбранную дату</div>
          )}
        </div>
      </Group>

      {/* Фиксированный нижний бар */}
      <FixedLayout>
        <Tabbar className='bg-white rounded-t-3xl py-2'>
          <TabbarItem text="Главная" onClick={() => routeNavigator.push('/home')}>
            <Icon28HomeOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem text="Календарь" onClick={() => routeNavigator.push('/сalendar')}>
            <Icon28CalendarOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem text="Пользователи" onClick={() => routeNavigator.push('/leaderBoard')}>
            <Icon24UsersOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem text="Монеты" onClick={() => routeNavigator.push('/coins')}>
            <Icon36CoinsStacks3Outline width={30} height={30} />
          </TabbarItem>
        </Tabbar>
      </FixedLayout>
    </Panel>
  );
};
