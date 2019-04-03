//import * as React from 'react'
import React, {useState} from 'react'
import Select from 'react-select';
import {ValueType, OptionsType, InputActionMeta} from "react-select/lib/types";

type OptionType = {
  value: string,
  label: string
}

const options: OptionsType<OptionType> = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];

export default function Hello() {
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null)

  function onInputChange(newValue: string, actionMeta: InputActionMeta) {
    console.log('newValue: ', newValue)
    console.log('actionMeta', actionMeta)
  }

  return <div>
    <h1>Hello React Select</h1>
    <Select value={selectedOption} onChange={setSelectedOption} options={options}
            onInputChange={onInputChange}
            placeholder='Input something ...'/>
    <div>{JSON.stringify(selectedOption)}</div>
  </div>
};
