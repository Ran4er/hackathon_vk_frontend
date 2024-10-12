import { FC } from 'react';
import {
  Panel,
  TabbarItem,
  FixedLayout,
  NavIdProps,
  Tabbar,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon24UsersOutline, Icon28HomeOutline, Icon24CalendarOutline, Icon36CoinsStacks3Outline  } from '@vkontakte/icons';

import "../assets/globals.css";
import { getRoundedClassName } from '@vkontakte/vkui/dist/components/ToolButton/ToolButton';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

const tabbarStyle = {
  backgroundColor: "#FFFFFF",
  getRoundedClassName: "15px 15px",
};

export const Home: FC<HomeProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <FixedLayout>
        <Tabbar style={tabbarStyle}>
          <TabbarItem>
            <Icon28HomeOutline width={30} height={30}/>
          </TabbarItem>
          <TabbarItem>
            <img alt="calendar" src="../assets/calendar_outline_28.png" width={30} height={30} />
          </TabbarItem>
          <TabbarItem>
            <Icon24UsersOutline />
          </TabbarItem>
          <TabbarItem>
            <Icon36CoinsStacks3Outline />
          </TabbarItem>
        </Tabbar>
      </FixedLayout>
    </Panel>
  );
};
