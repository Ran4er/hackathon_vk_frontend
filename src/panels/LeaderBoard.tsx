import { FC } from 'react';
import { Panel, NavIdProps, TabbarItem, Tabbar } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28HomeOutline, Icon24UsersOutline, Icon36CoinsStacks3Outline, Icon28CalendarOutline } from '@vkontakte/icons';

import "../output.css";

export interface LeaderBoardProps extends NavIdProps {
    
}

export const LeaderBoard:FC<LeaderBoardProps> = ({id}) => {
    const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
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
    </Panel>
  );
};