import { FC } from 'react';
import { Panel, NavIdProps } from '@vkontakte/vkui';

import "../output.css";
import TabBar from '../components/Tabbar/Tabbar';

export interface LeaderBoardProps extends NavIdProps {
    
}

export const LeaderBoard:FC<LeaderBoardProps> = ({id}) => {

  return (
    <Panel id={id}>

        <div className='bg-[#F4F4F4]'>

        </div>

        <TabBar></TabBar>
    </Panel>
  );
};