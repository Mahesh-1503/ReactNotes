import React, { useState, ChangeEvent } from 'react';

interface TemperatureInputProps {
  scale: string;
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
}

const TemperatureInput: React.FC<TemperatureInputProps> = ({ scale, temperature, onTemperatureChange }) => (
  <fieldset>
    <legend>Enter temperature in {scale}:</legend>
    <input
      value={temperature}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onTemperatureChange(e.target.value)}
    />
  </fieldset>
);

const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const toCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9;

  const toFahrenheit = (celsius: number): number => (celsius * 9 / 5) + 32;

  const handleCelsiusChange = (temperature: string) => {
    setCelsius(temperature);
    setFahrenheit(Math.round(toFahrenheit(parseFloat(temperature))).toString());
  };

  const handleFahrenheitChange = (temperature: string) => {
    setFahrenheit(temperature);
    setCelsius(Math.round(toCelsius(parseFloat(temperature))).toString());
  };

  return (
    <div>
      <TemperatureInput
        scale="Celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureConverter;