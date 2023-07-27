import React, {useState} from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

type WindowSize = {
    width: number;
    height: number;
}

export default function WindowSizeDisplay() {
    const { width, height } = useWindowSize();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}><h1>Window Size</h1><br></br>
        {width}x{height}
      </div>
    )
  }
  