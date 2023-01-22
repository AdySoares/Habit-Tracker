import { FormEvent, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { CheckBoxForms } from './CheckBoxForms'

const allPossibleWeekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feria', 'Sábado']

export function NewHabitsForms() {

  const [tile, setTile] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  function submitForm(event: FormEvent) {
    event.preventDefault()

  }

  function addWeekDays(WeekDaysIndex: number) {
    if (weekDays.includes(WeekDaysIndex)) {
      setWeekDays(previousState => previousState.filter(days => days !== WeekDaysIndex))
    } else {
      setWeekDays(previousState => [...previousState, WeekDaysIndex])
    }
  }


  return (
    <form onSubmit={submitForm} className='w-full mt-5 font-semibold text-base'>
      <div>
        <label htmlFor="TitleHabit">Qual o seu comprometimento ?</label>

        <input
          className='my-4 bg-zinc-800 w-full h-14 border-none rounded-lg outline-none px-4 placeholder:text-zinc-400'
          type='text'
          placeholder="Ex: Exercícios, dormir bem, etc..."
          autoFocus
          onChange={event => setTile(event.target.value)}
        />

      </div>

      <label>Qual a recorrência ?</label>

      <div className='mt-4 mb-6'>

        {
          allPossibleWeekDays.map((weekDay, i) => {
            return (
              <CheckBoxForms
                key={weekDay}
                title={weekDay}
                onCheckedChange={() => addWeekDays(i)}
              />
            )
          })
        }

      </div>

      <button type='submit' className='bg-green-600 w-full h-14 rounded-lg flex gap-3 align-center items-center justify-center hover:brightness-90'>
        <BsCheckLg
          size={15}
        />
        Confirmar
      </button>
    </form>
  )
}