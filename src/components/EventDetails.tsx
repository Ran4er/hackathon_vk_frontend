import { FC } from 'react';
import { Panel, PanelHeader, Div, Button, Avatar, Text } from '@vkontakte/vkui';

const EventDetailPage: FC = () => {
  return (
    <Panel>
      <PanelHeader>Балл в ITMO</PanelHeader>
      
      {/* Event Image */}
      <Div>
        <img src="event_image_url" alt="Event" style={{ width: '100%', borderRadius: '16px' }} />
      </Div>

      {/* Event Info */}
      <Div style={{ textAlign: 'center' }}>
        <Text weight="2">Балл в ITMO</Text>
        <Text style={{ color: 'gray' }}>20.11.2024</Text>

        {/* Categories */}
        <Div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
          <Text style={{ backgroundColor: '#FFD700', padding: '4px 12px', borderRadius: '8px' }}>be friendly</Text>
          <Text style={{ marginLeft: '8px', backgroundColor: '#FF4500', padding: '4px 12px', borderRadius: '8px' }}>be pro</Text>
        </Div>

        {/* Event Points */}
        <Div>
          <Text weight="1">200 баллов</Text>
        </Div>
      </Div>

      {/* Registration Button */}
      <Div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Button size="l">Зарегистрироваться</Button>
      </Div>
    </Panel>
  );
};

export default EventDetailPage;
