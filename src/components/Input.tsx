import * as React from 'react';

export interface IAppProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}
//create input for search component
export default function Input (props: IAppProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchValue(event.target.value);
  };
  const searchStyle = {
    width: '100%',
    height: '40px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box' as 'border-box',
    };

    
  return (
      <input placeholder='Search' style={searchStyle} type="text" value={props.searchValue} onChange={handleChange} />
  );
}

