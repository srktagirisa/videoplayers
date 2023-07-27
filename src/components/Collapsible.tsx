import React, {useState} from 'react';

type CollapsableProps = {
    title: string;
    children: string;

}


const Collapsible: React.FC<CollapsableProps> = ({ title, children }) => {
  const [showChildren, setshowChildren] = useState(true);

const handleHideChildren = () => {
  setshowChildren((prevShowChildren) => !prevShowChildren);
};
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <h2 onClick={handleHideChildren}>{title}</h2><br></br>
          {showChildren && children } 
        </div>
      );
    };
    
export default Collapsible;