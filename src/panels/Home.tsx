import { FC } from 'react';
import {
  Panel,
  FixedLayout,
  Card,
  Subhead,
  Button,
  Avatar,
  Div,
  Text,
  Group,
  Title,
  Spacing
} from '@vkontakte/vkui';
import TabBar from '../components/Tabbar/Tabbar';
import "../output.css";
import "../assets/style.css";

import EventCard from '../components/EventCard/EventCard';

import BallEvent from '../assets/event/ball.jpg';
import VkHack from '../assets/event/vk_hack.jpg';
import SportEvent from '../assets/event/sportEvent.png'; 

import AvatarImage from '../assets/avatar/dog.jpg';
import CoinImage from '../assets/coin.png';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_VIEW_PANELS } from '../routes';

export interface HomeProps {
  id: string;
}

export const Home: FC<HomeProps> = ({ id }) => {

  const routerNavigator = useRouteNavigator();

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
      <Group>
        <Div className="bg-[#F4F4F4]">
          {/* Верхняя часть страницы */}
          <Div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '64px' }}>
            <Title  level="2" weight="1" style={{fontSize: '32px'}}>Questify</Title>
            <Div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Button mode="secondary" size="m" style={{backgroundColor: 'white'}} before={<img src={CoinImage} alt="coin" width={19} height={19} />}>1400</Button>
              <Avatar src={AvatarImage} size={63} onClick={() => {routerNavigator.push(DEFAULT_VIEW_PANELS.PROFILE)}} />
            </Div>
          </Div>

          {/* Кнопки под шапкой */}
          <Div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <Button mode="secondary" size="l" stretched>Рекомендации</Button>
            <Button mode="secondary" size="l" stretched>Ближайшее</Button>
          </Div>

          {/* Категории */}
          <Div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <Button rounded={true} mode="secondary" size="m" style={{ color: '#DD1414', backgroundColor: 'white'  }}>be healthy</Button>
            <Button rounded={true} mode="secondary" size="m" style={{ color: '#0042FF', backgroundColor: 'white'  }}>be pro</Button>
            <Button rounded={true} mode="secondary" size="m" style={{ color: '#3FC116', backgroundColor: 'white'  }}>be eco</Button>
          </Div>

          <Div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <Button rounded={true} mode="secondary" size="m" style={{ color: '#FF76FE', backgroundColor: 'white'  }}>be fit</Button>
            <Button rounded={true} mode="secondary" size="m" style={{ color: '#FC9316', backgroundColor: 'white'  }}>be open</Button>
            <Button rounded={true} mode="secondary" size="m" style={{ color: '#FF76FE', backgroundColor: 'white'  }}>be friendly</Button>
          </Div>

          <Subhead style={{ color: 'gray', marginBottom: '16px', textAlign: 'center'}}>Категории</Subhead>

          {/* Карточка 1 */}
          <Card mode="shadow" style={{ height: '224px', width: '390px', borderRadius: '30px', overflow: 'hidden' }}>
            {events.map((event, index) => (
              <EventCard 
                key={index}
                eventTitle={event.title}
                eventDate={event.date}
                eventCategory={event.category}
                eventPoints={event.points}
                eventImage={event.image}
              />
            ))}
            <Spacing size={16} />
          </Card>
        </Div>
      </Group>

      <FixedLayout vertical="bottom">
        <TabBar />
      </FixedLayout>
    </Panel>
  );
};
