import React, {useState} from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { DeviceTypeModel } from '../DeviceTypeModel';

type DeviceType = {
    width: number;
}

const deviceTypes: DeviceTypeModel[] = [
    { width: '576', type: 'X-Small', desc: 'portrait phones' },
    { width: '768', type: 'Small', desc: 'landscape phones' },
    { width: '992', type: 'Medium', desc: 'tablets' },
    { width: '1200', type: 'Large', desc: 'desktops' },
    { width: '1400', type: 'X-Large', desc: 'large desktops' },
    { width: 'Larger sizes', type: 'Small', desc: 'landscape phones' }
  ];

export default function WindowSizeDisplay() {
    const { width } = useWindowSize();
    const getDeviceTypeByWidth = (width: any) => {
        const numericWidth = parseInt(width);
        const deviceType = deviceTypes.find((device) => {
          if (device.width === 'Larger sizes') {
            return true;
          }
          return numericWidth < parseInt(device.width);
        });
        return deviceType || { type: 'Unknown', desc: 'Unknown' };
      };
    
      const { type, desc } = getDeviceTypeByWidth(width);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Device Type</h1><br></br>
        {type}:{desc}
      </div>
    )
  }
  