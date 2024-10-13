import { FC } from 'react';
import { Div, Text, Button, Spacing } from '@vkontakte/vkui';

interface EventCardProps {
  eventTitle: string;
  eventDate: string;
  eventCategory: string;
  eventPoints: number;
  eventImage: string;
}

const EventCard: FC<EventCardProps> = ({ eventTitle, eventDate, eventCategory, eventPoints, eventImage }) => {
  return (
    <Div style={{ padding: '8px', position: 'relative', width: '390px', height: '224px'}}>
      {/* Scaled cropped image */}
      <div style={{ height: '120px', width: '100%', overflow: 'hidden', borderRadius: '22px', paddingLeft: '8px', paddingTop: '8px' }}>
        <img
          src={eventImage}
          alt={eventTitle}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '22px' }}
        />
      </div>

      {/* Category and Points */}
      <Div style={{ position: 'absolute', top: '113px', left: '0', right: '0', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Event category */}
        <Text weight="2" style={{ backgroundColor: '#F4F4F4', left: '35px', height: '30px', width: '120px', borderRadius: '10px', color: '#6A1B9A' }}>
          {eventCategory}
        </Text>

        {/* Event points */}
        <Button mode="secondary" size="s" style={{ backgroundColor: '#FFFFFF', color: '#6A1B9A' }}>
          {eventPoints}
        </Button>
      </Div>

      {/* Event details */}
      <Div style={{ padding: '16px' }}>
        <Text weight="2" style={{ fontSize: '16px', marginBottom: '4px' }}>{eventTitle}</Text>
        <Text style={{ color: 'gray' }}>{eventDate}</Text>
      </Div>

      <Spacing size={16} />

    </Div>
  );
};

export default EventCard;
