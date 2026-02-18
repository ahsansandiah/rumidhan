import { createContext, useContext, useState } from 'react';

const MissionContext = createContext();

export function MissionProvider({ children }) {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedSession, setSelectedSession] = useState(null); // 'iqro' | 'islami' | 'english'

  const selectDay = (day) => {
    setSelectedDay(day);
    setSelectedSession(null);
  };

  const selectSession = (sessionType) => {
    setSelectedSession(sessionType);
  };

  const clearSession = () => {
    setSelectedSession(null);
  };

  return (
    <MissionContext.Provider value={{
      selectedDay,
      selectedSession,
      selectDay,
      selectSession,
      clearSession,
    }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  const context = useContext(MissionContext);
  if (!context) {
    throw new Error('useMission must be used within a MissionProvider');
  }
  return context;
}
