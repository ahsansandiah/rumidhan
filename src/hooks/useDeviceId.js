import { useState, useEffect } from 'react';

const DEVICE_ID_KEY = 'rumidhan_device_id';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function useDeviceId() {
  const [deviceId, setDeviceId] = useState(() => {
    const stored = localStorage.getItem(DEVICE_ID_KEY);
    if (stored) return stored;

    const newId = generateUUID();
    localStorage.setItem(DEVICE_ID_KEY, newId);
    return newId;
  });

  useEffect(() => {
    if (!deviceId) {
      const newId = generateUUID();
      localStorage.setItem(DEVICE_ID_KEY, newId);
      setDeviceId(newId);
    }
  }, [deviceId]);

  return deviceId;
}
