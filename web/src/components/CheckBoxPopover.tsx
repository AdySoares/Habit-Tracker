import { BsCheckLg } from 'react-icons/bs';
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckboxProps } from '@radix-ui/react-checkbox';

interface Props extends CheckboxProps {
  title: string,
}

export function CheckBoxPopover({ title, ...rest }: Props) {
  return (
    <Checkbox.Root
      className="w-full flex flex-row gap-3 items-center mb-3 group"
      {...rest}
    >
      <div
        className='w-9 h-9 flex items-center border-2 border-zinc-500 justify-center rounded-lg group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors'
      >
        <Checkbox.Indicator>
          <BsCheckLg size={20} />
        </Checkbox.Indicator>

      </div>

      <span
        className='font-semibold text-xl leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-500'
      >
        {title}
      </span>
    </Checkbox.Root>
  )
}