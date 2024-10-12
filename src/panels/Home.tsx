import { FC } from 'react';
import {
  Panel,
  TabbarItem,
  FixedLayout,
  NavIdProps,
  Tabbar,
  Group,
  Card,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon24UsersOutline, Icon28HomeOutline, Icon28CalendarOutline, Icon36CoinsStacks3Outline } from '@vkontakte/icons';

import "../output.css";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

const tabbarStyle = {
  backgroundColor: "#FFFFFF",
  borderRadius: "50px 50px 0 0", // Закругление только верхних углов
  height: "70px", // Оптимальная высота для панели
  display: "flex", // Выровнять элементы по центру
  justifyContent: "space-around", // Равномерное распределение элементов
  alignItems: "center", // Вертикальное выравнивание
};

export const Home: FC<HomeProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <Group>
        {/* Топовые элементы */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Questify</div>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold text-lg mr-2">1400</span>
              <img src="../assets/dog.png" alt="dog" width={40} height={40} />
            </div>
          </div>

          {/* Кнопки под шапкой */}
          <div className="flex justify-between my-3">
            <button className="bg-gray-200 rounded-full px-4 py-1">Рекомендации</button>
            <button className="bg-gray-200 rounded-full px-4 py-1">Ближайшее</button>
          </div>

          {/* Категории */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-red-200 text-red-600 px-3 py-1 rounded-full">be healthy</span>
            <span className="bg-blue-200 text-blue-600 px-3 py-1 rounded-full">be pro</span>
            <span className="bg-green-200 text-green-600 px-3 py-1 rounded-full">be eco</span>
            <span className="bg-purple-200 text-purple-600 px-3 py-1 rounded-full">be fit</span>
            <span className="bg-orange-200 text-orange-600 px-3 py-1 rounded-full">be open</span>
            <span className="bg-pink-200 text-pink-600 px-3 py-1 rounded-full">be friendly</span>
          </div>

          {/* Карточка 1 */}
          <Card mode="shadow" className="mb-4">
            <div className="p-4">
              <img
                src="../assets/ball.jpg"
                alt="Event"
                className="rounded-lg w-full mb-2"
              />
              <div className="flex justify-between items-center">
                <span className="bg-purple-200 text-purple-600 px-2 py-1 rounded-full">be friendly</span>
                <span className="text-pink-500 font-bold">200</span>
              </div>
              <div className="mt-2">
                <div className="font-bold">Бал в ИТМО</div>
                <div className="text-gray-500 text-sm">20.11.2024</div>
              </div>
            </div>
          </Card>

          {/* Карточка 2 */}
          <Card mode="shadow" className="mb-4">
            <div className="p-4">
              <img
                src="../assets/vk_hack.jpg"
                alt="Hackathon"
                className="rounded-lg w-full mb-2"
              />
              <div className="flex justify-between items-center">
                <span className="bg-blue-200 text-blue-600 px-2 py-1 rounded-full">be pro</span>
                <span className="text-pink-500 font-bold">500</span>
              </div>
              <div className="mt-2">
                <div className="font-bold">Хакатон VK Mini Apps x ITMO Hack</div>
                <div className="text-gray-500 text-sm">11.10.2024 - 13.10.2024</div>
              </div>
            </div>
          </Card>

          {/* Дополнительная карточка */}
          <Card mode="shadow" className="mb-4">
            <div className="p-4">
              <img
                src="../assets/sport_event.jpg"
                alt="Sport Event"
                className="rounded-lg w-full mb-2"
              />
              <div className="flex justify-between items-center">
                <span className="bg-red-200 text-red-600 px-2 py-1 rounded-full">be fit</span>
                <span className="text-pink-500 font-bold">300</span>
              </div>
              <div className="mt-2">
                <div className="font-bold">Спортивное мероприятие</div>
                <div className="text-gray-500 text-sm">25.11.2024</div>
              </div>
            </div>
          </Card>
        </div>
      </Group>
      <FixedLayout vertical="bottom">
        <Tabbar style={tabbarStyle}>
          <TabbarItem  onClick={() => routeNavigator.push('/home')}>
            <Icon28HomeOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem  onClick={() => routeNavigator.push('/сalendar')}>
            <Icon28CalendarOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem  onClick={() => routeNavigator.push('/leaderBoard')}>
            <Icon24UsersOutline width={30} height={30} />
          </TabbarItem>
          <TabbarItem  onClick={() => routeNavigator.push('/coins')}>
            <Icon36CoinsStacks3Outline width={30} height={30} />
          </TabbarItem>
        </Tabbar>
      </FixedLayout>
    </Panel>
  );
};
