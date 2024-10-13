import { useState, useEffect, ReactNode } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner, Root } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Home, CalendarPage } from './panels';
import LeaderboardPage from './panels/LeaderBoard';
import { DEFAULT_ROOT, DEFAULT_VIEW, DEFAULT_VIEW_PANELS } from './routes';
import { DEFAULT_TRIGGER } from '@vkontakte/vkui/dist/lib/floating';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME, view: activeView = DEFAULT_TRIGGER } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <Root id={DEFAULT_ROOT} activeView={activeView}>
          <View id={DEFAULT_VIEW} activePanel={activePanel}>
            <Home id="home" />
            <LeaderboardPage id="leaderBoard"/>
            <CalendarPage id="calendar" />
          </View>
        </Root>
      </SplitCol>
    </SplitLayout>
  );
};
