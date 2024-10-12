import { useState } from 'react';
import { Icon24UsersOutline, Icon28HomeOutline, Icon36CoinsStacks3Outline, Icon28CalendarOutline } from '@vkontakte/icons';
import './TabBar.css'; // Здесь будет ваш CSS
import { DEFAULT_VIEW_PANELS } from '../../routes';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const TabBar = () => {
  const [activePage, setActivePage] = useState(); // Храним состояние текущей страницы
  const routeNavigator = useRouteNavigator();

  return (
    <div className="tabbar">
      <div
        className={`tabbar-item ${activePage === 'home' ? 'active' : ''}`}
        onClick={() => {
          setActivePage('home');
          routeNavigator.push(DEFAULT_VIEW_PANELS.HOME);
        }}
      >
        <Icon28HomeOutline width={30} height={30} />
      </div>

      <div
        className={`tabbar-item ${activePage === 'calendar' ? 'active' : ''}`}
        onClick={() => {
          routeNavigator.push(DEFAULT_VIEW_PANELS.CALENDAR);
          setActivePage('calendar');
        }}
      >
        <Icon28CalendarOutline width={30} height={30} />
      </div>

      <div
        className={`tabbar-item ${activePage === 'leaderBoard' ? 'active' : ''}`}
        onClick={() => {
          routeNavigator.push(DEFAULT_VIEW_PANELS.LEADERBOARD);
          setActivePage('leaderBoard');
        }}
      >
        <Icon24UsersOutline width={30} height={30} />
      </div>
      <div
        className={`tabbar-item ${activePage === 'points' ? 'active' : ''}`}
        onClick={() => {
          routeNavigator.push(DEFAULT_VIEW_PANELS.POINTS);
          setActivePage('points');
        }}
      >
        <Icon36CoinsStacks3Outline width={30} height={30} />
      </div>
    </div>
  );
};

export default TabBar;
