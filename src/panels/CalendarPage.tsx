import { FC, useState } from 'react';
import { Panel, Group, Card, FixedLayout, TabbarItem, Tabbar, NavIdProps } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import Calendar from 'react-calendar';
import { Icon28HomeOutline, Icon24UsersOutline, Icon36CoinsStacks3Outline } from '@vkontakte/icons';
import "../assets/globals.css"; // Подключение глобальных стилей
import 'react-calendar/dist/Calendar.css'; // Стили для календаря

export interface CalendarProps extends NavIdProps {}

export const CalendarPage: FC<CalendarProps> = ({ id }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const routeNavigator = useRouteNavigator();

  const events = [
    {
      date: '2024-11-20',
      title: 'Бал в ИТМО',
      category: 'be friendly',
      points: 200,
      image: '../assets/ball.jpg',
      description: 'Описание мероприятия...',
    },
    {
      date: '2024-10-12',
      title: 'Хакатон VK Mini Apps x ITMO Hack',
      category: 'be pro',
      points: 500,
      image: '../assets/vk_hack.jpg',
      description: 'Описание хакатона...',
    },
  ];

  const filteredEvents = events.filter(event => event.date === selectedDate.toISOString().split('T')[0]);

  return (
    <Panel id={id}>
      <Group>
        <div className="p-4">
          <div className="text-xl font-bold mb-2">Календарь</div>
          
          {/* Календарь */}
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="mb-4"
          />

          {/* Карточки событий */}
          {filteredEvents.length ? (
            filteredEvents.map(event => (
              <Card key={event.date} mode="shadow" className="mb-4">
                <div className="p-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg w-full mb-2"
                  />
                  <div className="flex justify-between items-center">
                    <span className={`bg-${event.category} px-2 py-1 rounded-full`}>
                      {event.category}
                    </span>
                    <span className="text-pink-500 font-bold">{event.points}</span>
                  </div>
                  <div className="mt-2 font-bold">{event.title}</div>
                  <div className="text-gray-500 text-sm">{event.date}</div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center text-gray-500">Нет событий на выбранную дату</div>
          )}
        </div>
      </Group>

      {/* Нижний бар с иконками */}
      <FixedLayout vertical="bottom">
        <Tabbar style={{ backgroundColor: "#FFFFFF", borderRadius: "50px 50px 0 0", height: "70px" }}>
          <TabbarItem onClick={() => routeNavigator.push('/home')}>
            <Icon28HomeOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem onClick={() => routeNavigator.push('/calendar')}>
            <img alt="calendar" src="../assets/calendar_outline_28.png" width={30} height={30} />
          </TabbarItem>
          <TabbarItem onClick={() => routeNavigator.push('/users')}>
            <Icon24UsersOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem onClick={() => routeNavigator.push('/coins')}>
            <Icon36CoinsStacks3Outline width={30} height={30} />
          </TabbarItem>
        </Tabbar>
      </FixedLayout>
    </Panel>
  );
};