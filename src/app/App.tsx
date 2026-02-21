import { useState } from 'react';
import { Room1 } from './components/Room1';
import { Room2 } from './components/Room2';
import { Room3 } from './components/Room3';
import { Room4 } from './components/Room4';
import { Room5 } from './components/Room5';
import { Room6 } from './components/Room6';
import { FinalReveal } from './components/FinalReveal';
import { Introduction } from './components/Introduction';

export interface RoomData {
  room1: string;
  room2: string;
  room3: string;
  room4: string;
  room5: string;
  room6: string;
}

export default function App() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [username, setUsername] = useState('');
  const [roomData, setRoomData] = useState<RoomData>({
    room1: '',
    room2: '',
    room3: '',
    room4: '',
    room5: '',
    room6: '',
  });

  const updateRoomData = (room: keyof RoomData, value: string) => {
    setRoomData(prev => ({ ...prev, [room]: value }));
  };

  const nextRoom = () => {
    setCurrentRoom(prev => prev + 1);
  };

  const rooms = [
    <Introduction key="intro" onStart={(name) => { setUsername(name); nextRoom(); }} />,
    <Room1 key="room1" onComplete={(value) => { updateRoomData('room1', value); nextRoom(); }} username={username} />,
    <Room2 key="room2" onComplete={(value) => { updateRoomData('room2', value); nextRoom(); }} username={username} previousValue={roomData.room1} />,
    <Room3 key="room3" onComplete={(value) => { updateRoomData('room3', value); nextRoom(); }} username={username} previousValue={roomData.room2} />,
    <Room4 key="room4" onComplete={(value) => { updateRoomData('room4', value); nextRoom(); }} username={username} previousValue={roomData.room3} />,
    <Room5 key="room5" onComplete={(value) => { updateRoomData('room5', value); nextRoom(); }} username={username} roomData={roomData} />,
    <Room6 key="room6" onComplete={(value) => { updateRoomData('room6', value); nextRoom(); }} username={username} roomData={roomData} />,
    <FinalReveal key="final" roomData={roomData} username={username} onRestart={() => { setCurrentRoom(0); setUsername(''); setRoomData({ room1: '', room2: '', room3: '', room4: '', room5: '', room6: '' }); }} />,
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-2xl">
        {rooms[currentRoom]}
      </div>
    </div>
  );
}