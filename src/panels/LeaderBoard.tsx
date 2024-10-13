import { FC } from 'react';
import { Div, Panel, PanelHeader, Avatar, Button, Text } from '@vkontakte/vkui';

const LeaderboardPage: FC = () => {
  return (
    <Panel>
      <PanelHeader>Рейтинг</PanelHeader>
      <Div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar size={64} src="user1_avatar_url" />
          <Avatar size={80} src="user2_avatar_url" style={{ margin: '0 16px' }} />
          <Avatar size={64} src="user3_avatar_url" />
        </div>
        <Text>Вы на 6 месте</Text>
      </Div>

      {/* Invite Friends */}
      <Div style={{ marginTop: '24px', textAlign: 'center' }}>
        <Button mode="secondary">Пригласить друзей</Button>
      </Div>

      {/* Friends List */}
      <Div>
        <Text>Мои друзья</Text>
        <div>
          {['Мария Иванова', 'Александр Смирнов', 'Иван Петров'].map((name, idx) => (
            <Div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar size={48} />
              <Text style={{ marginLeft: '12px' }}>{name}</Text>
            </Div>
          ))}
        </div>
      </Div>
    </Panel>
  );
};

export default LeaderboardPage;
