import { forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import { getYear, getMonth} from "date-fns";
import { ptBR } from "date-fns/locale";
import { calculateAge } from "../utils";

// Registrando a localização para pt-BR
registerLocale("pt-BR", ptBR);

function range(start: number, end: number, step: number = 1): number[] {
  const array = [];
  for (let i = start; i >= end; i -= step) {
    array.push(i);
  }
  return array;
}

export default function InputDatePicker({ label, value, setValue }: Props) {
  const years = range(getYear(new Date()), getYear(new Date()) - 100);
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <StyledButton onClick={onClick} ref={ref}>
      {value || "Selecione a data"}
    </StyledButton>
  ));
  
  return (
    <Wrapper>
      <LabelSld>{label}</LabelSld>
      <LineSld>
        <DatePickerWrapper>
          <DatePicker
            selected={value}
            onChange={(date) => setValue(date)}
            customInput={<CustomInput />}
            dateFormat="dd/MM/yyyy"
            locale="pt-BR"
            placeholderText="dd/mm/yyyy"
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {"<"}
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </button>
              </div>
            )}
          />
        </DatePickerWrapper>
        {value && <AgeSld>Idade: {calculateAge(value)} anos</AgeSld>}
      </LineSld>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex
  flex-col
`;

const LabelSld = tw.label`
  flex;
`;

const DatePickerWrapper = tw.div`
  flex
  relative
`;

const StyledButton = tw.button`
  w-100
  p-2
  rounded-md
  border-none
  bg-white
  cursor-pointer
  box-border
`;

const LineSld = tw.div`
  flex
  flex-row
  justify-center
  gap-4
`

const AgeSld = tw.div`
  mt-2
`;

interface Props {
  label: string;
  value: Date | null;
  setValue: (date: Date | null) => void;
}
