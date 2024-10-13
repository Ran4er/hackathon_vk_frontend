import { FC } from 'react';
import { Div, Panel, PanelHeader, Tabs, TabsItem, Calendar, CardGrid, Card, Text } from '@vkontakte/vkui';
import { Icon24CalendarOutline, Icon28HomeOutline, Icon24UsersOutline, Icon28MarketOutline } from '@vkontakte/icons';

const CalendarPage: FC = () => {
  return (
    <Panel>
      <PanelHeader>Календарь</PanelHeader>

      {/* Event Filter Tabs */}
      <Tabs>
        <TabsItem selected>Все мероприятия</TabsItem>
        <TabsItem>Мои записи</TabsItem>
      </Tabs>

      {/* Calendar Component */}
      <Div style={{ padding: '0 16px' }}>
        <Calendar 
          size="m" 
          selectionType="single" 
          onChange={() => {}} 
          value={new Date()} 
        />
      </Div>

      {/* Upcoming Event */}
      <Div>
        <CardGrid size="m">
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px' }}>
              <img src="event_image_url" alt="Event" style={{ height: '80px', borderRadius: '8px' }} />
              <div>
                <Text>Хакатон VK Mini Apps x ITMO Hack</Text>
                <Text weight="2" style={{ color: 'gray' }}>11.10.2024 - 13.10.2024</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text weight="1" style={{ marginRight: '8px' }}>500</Text>
                <Icon24UsersOutline />
              </div>
            </div>
          </Card>
        </CardGrid>
      </Div>

      {/* Bottom Navigation */}
      <Div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#fff' }}>
        <Tabs mode="default">
          <TabsItem><Icon28HomeOutline /></TabsItem>
          <TabsItem selected><Icon24CalendarOutline /></TabsItem>
          <TabsItem><Icon24UsersOutline /></TabsItem>
          <TabsItem><Icon28MarketOutline /></TabsItem>
        </Tabs>
      </Div>
    </Panel>
  );
};

export default CalendarPage;
