import { FC, useState } from 'react';
import { Panel, FixedLayout, Button, Tabs, TabsItem, NavIdProps, Title, HorizontalScroll, Div } from '@vkontakte/vkui';
import CalendarEvents from '../components/Calendar/Calendar';
import TabBar from '../components/Tabbar/Tabbar';
import '../output.css';

import BallEvent from '../assets/event/ball.jpg';
import VkHack from '../assets/event/vk_hack.jpg';

export interface CalendarPageProps extends NavIdProps {}

export const CalendarPage: FC<CalendarPageProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Пример данных событий
  const events = [
    {
      date: '2024-11-20',
      title: 'Бал в ИТМО',
      category: 'be friendly',
      points: 200,
      image: BallEvent,
    },
    {
      date: '2024-10-12',
      title: 'Хакатон VK Mini Apps x ITMO Hack',
      category: 'be pro',
      points: 500,
      image: VkHack,
    },
  ];

  return (
    <Panel id={id}>
      <div className='bg-[#F4F4F4] items-center'>
        <div className="px-4 pb-24">
          {/* Заголовок страницы */}
          <Title level="1" weight="3" className="text-center pt-16">
            Календарь
          </Title>

          {/* Табы для переключения между мероприятиями */}
          <Tabs mode="accent" className="my-4">
            <TabsItem
              selected={activeTab === 0}
              onClick={() => setActiveTab(0)}
            >
              Все мероприятия
            </TabsItem>
            <TabsItem
              selected={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              Мои записи
            </TabsItem>
          </Tabs>

          {/* Кнопки фильтрации по категориям */}
          <HorizontalScroll>
            <div className="flex space-x-2 my-4">
              <Button mode="secondary" size="m" style={{ color: '#DD1414', backgroundColor: 'white' }} onClick={() => setSelectedCategory('be healthy')}>
                be healthy
              </Button>
              <Button mode="secondary" size="m" style={{ color: '#0042FF', backgroundColor: 'white' }} onClick={() => setSelectedCategory('be pro')}>
                be pro
              </Button>
              <Button mode="secondary" size="m" style={{ color: '#3FC116', backgroundColor: 'white' }} onClick={() => setSelectedCategory('be eco')}>
                be eco
              </Button>
              <Button mode="secondary" size="m" style={{ color: '#FF76FE', backgroundColor: 'white' }} onClick={() => setSelectedCategory('be fit')}>
                be fit
              </Button>
              <Button mode="secondary" size="m" style={{ color: '#FC9316', backgroundColor: 'white' }} onClick={() => setSelectedCategory('be open')}>
                be open
              </Button>
              <Button mode="secondary" size="m" style={{ color: '#FF76FE', backgroundColor: 'white' }} onClick={() => setSelectedCategory('be friendly')}>
                be friendly
              </Button>
            </div>
          </HorizontalScroll>

          {/* Календарь */}
          <Div className="my-4" style={{ justifyItems: 'center' }}>
            <CalendarEvents disablePickers={true} showNeighboringMonth={true} listenDayChangesForUpdate={true} />
          </Div>

          {/* Карточки событий */}
          <div className="mt-4">
            {events
              .filter(event => selectedCategory === 'all' || event.category === selectedCategory)
              .map(event => (
                <div key={event.date} className="mb-4">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <img src={event.image} alt={event.title} className="w-full h-auto rounded-lg mb-2" />
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full bg-${event.category.split(' ')[1]}-200 text-${event.category.split(' ')[1]}-600`}>
                        {event.category}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-black">{event.points} points</span>
                    </div>
                    <div className="mt-2">
                      <div className="font-bold">{event.title}</div>
                      <div className="text-gray-500 text-sm">{event.date}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Фиксированный нижний бар */}
      <FixedLayout vertical="bottom">
        <TabBar />
      </FixedLayout>
    </Panel>
  );
};
