import { BsCheckLg } from 'react-icons/bs'
export function NewHabitsForms(){
  return(
    <form className='w-full mt-5 font-semibold'>
      <div>
        <label htmlFor="TitleHabit">Qual o seu comprometimento</label>
        <input
        className='my-4 bg-zinc-800 w-full h-14 border-none rounded-lg outline-none px-4 placeholder:text-zinc-400'
        type='text'
        placeholder="Ex: Exercícios, dormir bem, etc..."
        autoFocus
        />
      </div>

      <div>
        <label htmlFor="">Qual a recorrência?</label>
      </div>

      <button type='submit' className='bg-green-600 w-full h-14 rounded-lg flex gap-3 align-center items-center justify-center hover:brightness-90'>
        <BsCheckLg size={15} />
        Confirmar
      </button>
    </form>
  )
}