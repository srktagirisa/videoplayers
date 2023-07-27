import React from 'react';

type CollapsableProps = {
    title: string;
    children: string;

}

const Collapsible: React.FC<CollapsableProps> = ({ title, children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          {title}<br></br>
          {children}
        </div>
      );
    };
    
export default Collapsible;