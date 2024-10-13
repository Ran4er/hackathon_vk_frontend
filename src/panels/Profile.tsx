import { FC } from 'react';
import { Panel, PanelHeader, Avatar, Text, Button, Div } from '@vkontakte/vkui';

import AvatarUser from '../assets/avatar/dog.jpg';

const ProfilePage: FC = () => {
  return (
    <Panel>
      <PanelHeader>Профиль</PanelHeader>

      {/* User Information */}
      <Div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar size={64} src={AvatarUser} />
        <div style={{ marginLeft: '12px' }}>
          <Text weight="2">Алина Савинова</Text>
          <Text style={{ color: 'gray' }}>ФТМИ</Text>
        </div>
      </Div>

      {/* Recent Events */}
      <Div>
        <Text>Недавно посещенные</Text>
        <div style={{ display: 'flex', overflowX: 'scroll' }}>
          {['Балл в ITMO', 'Хакатон VK Mini Apps'].map((event, idx) => (
            <Div key={idx} style={{ marginRight: '16px' }}>
              <Text weight="2">{event}</Text>
              <Text style={{ color: 'gray' }}>2 дня назад</Text>
            </Div>
          ))}
        </div>
      </Div>

      {/* Settings and Logout */}
      <Div>
        <Button mode="secondary" size="l">Ввести промокод</Button>
        <Button mode="secondary" size="l">Настройки</Button>
        <Button mode="secondary" size="l">Мои запросы на публикацию</Button>
        <Button mode="secondary" size="l">Поддержка</Button>
        <Button mode="secondary" size="l">Выйти</Button>
      </Div>
    </Panel>
  );
};

export default ProfilePage;
