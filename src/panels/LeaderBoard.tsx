import { FC } from 'react';
import { Panel, Group, Card, NavIdProps, Button } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import "../assets/globals.css"; // Подключение глобальных стилей

export interface LeaderBoardProps extends NavIdProps {
    
}

export const LeaderBoard:FC<LeaderBoardProps> = ({id}) => {
    const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
        
    </Panel>
  );
};