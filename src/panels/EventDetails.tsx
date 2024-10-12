import { FC } from 'react';
import { Panel, Group, Card, NavIdProps, Button } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import "../output.css";

export interface EventDetailsProps extends NavIdProps {
  event: {
    title: string;
    date: string;
    category: string;
    points: number;
    image: string;
    description: string;
  };
}

export const EventDetails: FC<EventDetailsProps> = ({ id, event }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <Group>
        {/* Картинка события */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-60 object-cover mb-4"
        />
        
        {/* Заголовок и дата */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-2">
            <div className="text-2xl font-bold">{event.title}</div>
            <Button mode="secondary" onClick={() => routeNavigator.push('/calendar')}>
              Назад
            </Button>
          </div>
          <div className="text-gray-500 mb-4">{event.date}</div>

          {/* Категория и баллы */}
          <div className="flex justify-between items-center mb-4">
            <span className={`bg-${event.category} px-3 py-1 rounded-full`}>{event.category}</span>
            <span className="text-pink-500 font-bold">{event.points}</span>
          </div>

          {/* Описание */}
          <Card mode="shadow" className="p-4">
            <div className="text-lg font-bold mb-2">Описание</div>
            <p>{event.description}</p>
          </Card>
        </div>
      </Group>
    </Panel>
  );
};
