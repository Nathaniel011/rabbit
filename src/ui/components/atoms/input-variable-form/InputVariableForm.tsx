import './styles.scss';
import type { IProps } from './types/IProps';

interface InputVariableFormProps {
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (newValue: string) => void;
}

const InputVariableForm: React.FC<InputVariableFormProps> = ({ label, type, value, onChange }) => {
  return (
    <div className="input-variable-form">
      <label htmlFor={`input-${label}`}>{label}</label>
      <input
        id={`input-${label}`}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default InputVariableForm;
