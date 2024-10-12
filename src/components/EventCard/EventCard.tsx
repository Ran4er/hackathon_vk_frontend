import { FC } from 'react';
import { Div, Text, Button } from '@vkontakte/vkui';

interface EventCardProps {
  eventTitle: string;
  eventDate: string;
  eventCategory: string;
  eventPoints: number;
  eventImage: string;
}

const EventCard: FC<EventCardProps> = ({ eventTitle, eventDate, eventCategory, eventPoints, eventImage }) => {
  return (
      <Div style={{ padding: '0' }}>
        {/* Scaled cropped image */}
        <div style={{ height: '72px', width: '100%', overflow: 'hidden', borderTopLeftRadius: '22px', borderTopRightRadius: '22px' }}>
          <img 
            src={eventImage} 
            alt={eventTitle} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Event details */}
        <Div style={{ paddingTop: '8px' }}>
          <Div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text weight="2" style={{ color: 'purple' }}>{eventCategory}</Text>
            <Button mode="secondary" size="s" stretched>{eventPoints}</Button>
          </Div>
          <Text weight="1" style={{ marginTop: '8px' }}>{eventTitle}</Text>
          <Text style={{ color: 'gray' }}>{eventDate}</Text>
        </Div>
      </Div>
  );
};

export default EventCard;