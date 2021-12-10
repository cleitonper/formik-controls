import React, { FunctionComponent, useCallback, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';

import { useMedia } from 'hooks/useMedia';

import { Props, Option as OptionType, ValueType } from './types';


const DropdownIndicator: FunctionComponent = () => {
  return (
    <span className="select__dropdown-indicator">
      <FontAwesomeIcon icon={['fas', 'caret-down']} />
    </span>
  );
};


const Option: FunctionComponent<any> = (props) => {
  return <components.Option {...props} className={props?.data?.className} />;
};


const Select: FunctionComponent<Props> = ({ className, placeholder, value, disabled, options, onChange, onFocus, onBlur }) => {
  const [isSearchable, setIsSearchable] = useState(false);
  const [selectValue, setSelectValue] = useState<OptionType | undefined>(undefined);
  const defaultOption: OptionType = { label: '', value: '', isDisabled: true };
  const noOptionsMessage = (): string => 'Nenhuma opção disponível';

  const selectOptions = options
    ? [defaultOption, ...options]
    : options;

  const handleChange = useCallback((option: ValueType) => {
    if (!onChange || !option || Array.isArray(option)) return;
    onChange((option as OptionType).value);
  }, [onChange]);

  useEffect(() => {
    const label = options && options
      .filter((option) => option.value === value)
      .map((option) => option.label)
      .pop();

    if (value) setSelectValue({ value: value, label: label || value });
  }, [value, options]);

  useMedia('(min-width: 1024px)', (match) => setIsSearchable(match));

  return (
    <ReactSelect
      value={selectValue}
      isDisabled={disabled}
      className={className}
      options={selectOptions}
      classNamePrefix="select"
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      components={{ DropdownIndicator, Option }}
      isSearchable={isSearchable}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};


const StyledSelect = styled(Select)`
  z-index: 50;
  position: relative;

  .select__control {
    cursor: pointer;
    padding: var(--padding, 0px);
    background-color: var(--background, #FFFFFF);
    border-style: var(--border-style, solid);
    border-radius: var(--border-radius, 0px);
    border-color: var(--border-color, rgba(204, 204, 204, 1));
    border-width: var(--border-width, 1px);
    box-shadow: var(--box-shadow, none);
    min-height: initial;
    outline: none;

    transition: all 350ms;
  }

  .select__value-container {
    padding: var(--value-container-padding, 2px 8px);
  }

  .select__single-value {
    color: var(--foreground, var(--foreground-primary, #333333));
  }

  .select__placeholder {
    color: var(--placeholder-color, rgba(0, 0, 0, 0.55));
    margin-top: -1px;
  }

  .select__input input,
  .select__single-value,
  .select__placeholder {
    font-weight: var(--font-weight, 400);
    font-family: var(--font-family, 'Open Sans');
    font-size: var(--font-size, 1rem) !important;
  }

  .css-b8ldur-Input,
  .select__single-value {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    min-height: var(--min-height, 29px);
    padding-bottom: var(--value-padding-bottom, 8px) !important;
    padding-top: var(--value-padding-top, 4px) !important;
    margin: 0;
  }

  .select__value-container {
    min-height: 31px;
  }

  .css-b8ldur-Input {
    transform: translateY(1px);
  }

  :hover .select__control,
  .select__control--is-focused {
    border-color: var(--hover-border-color, rgba(var(--foreground-highlight-rgb), 0.65));
    background-color: var(--hover-background, #FFFFFF);
  }

  .select__dropdown-indicator {
    transition: all 350ms;
    color: var(--dropdown-color, rgba(0, 0, 0, 0.35));
    transform: var(--dropdown-transform);
    padding: 0px 14px;
  }

  :hover .select__dropdown-indicator,
  .select__control--is-focused .select__dropdown-indicator {
    color: var(--hover-dropdown-color, rgba(var(--foreground-highlight-rgb), 0.65));
  }

  :hover .select__dropdown-indicator {
    transform: var(--hover-dropdown-transform);
  }

  .select__control--menu-is-open .select__dropdown-indicator {
    transform: var(--active-dropdown-transform);
  }

  .select__indicator-separator {
    background-color: transparent;
  }

  .select__menu {
    margin: var(--menu-margin, 0px);
    border-radius: var(--menu-border-radius, 0px);
    border-color: var(--menu-border-color, rgba(var(--foreground-highlight-rgb), 0.65));
    border-width: var(--menu-border-width, 0px 1px 1px 1px);
    border-style: var(--menu-border-style, solid);
    background-color: var(--menu-background, #F5F5F5);
    overflow: hidden;
  }

  .select__menu:hover {
    border-color: var(--hover-menu-border-color, rgba(var(--foreground-highlight-rgb), 0.65));
  }

  .select__menu-list {
    padding: 0;
  }

  .select__menu-notice {
    padding: 18px 12px;
  }

  .select__option {
    font-size: var(--font-size, 1rem);
    font-weight: var(--font-weight, 400);
    font-family: var(--font-family, 'Open Sans');
    color: var(--option-foreground, #333333);
    padding: var(--option-padding, 12px);
    transition: all 250ms;
    cursor: pointer;
  }

  .select__option--is-focused {
    color: var(--option-focused-foreground, #FFFFFF);
    background-color: var(--option-focused-background, rgba(var(--foreground-highlight-rgb), 0.75));
  }

  .select__option--is-selected {
    color: var(--option-selected-foreground, #FFFFFF);
    background-color: var(--option-selected-background, rgba(var(--foreground-highlight-rgb), 0.85));
  }

  .select__option--is-disabled:first-child {
    display: none;
  }
`;


export default StyledSelect;
