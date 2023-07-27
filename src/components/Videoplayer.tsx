import React from 'react';

type VideoplayerProps = {
    title: string;
    children: string;

}

const Collapsible: React.FC<VideoplayerProps> = ({ title, children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          
        </div>
      );
    };
    
export default Collapsible;