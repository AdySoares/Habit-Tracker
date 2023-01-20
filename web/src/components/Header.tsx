import { FiPlus, FiX } from 'react-icons/fi'
import LogoImage from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-alert-dialog'
import { NewHabitsForms } from './NewHabitForm'

export function Header(){
  return(
  <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
  <img src={ LogoImage } alt="imagem da logo" />


    <Dialog.Root>
      <Dialog.Trigger type='button'
      className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex gap-3 justify-between items-center hover:border-violet-300 transition delay-200'>
        <FiPlus size={20} className='text-violet-500'/>
        Novo Habito
      </Dialog.Trigger>

      <Dialog.Portal>

        <Dialog.Overlay className='h-screen w-screen bg-background/80 inset-0 fixed'/>

        <Dialog.Content className='absolute bg-zinc-900 rounded-2xl p-10 w-full max-w-md top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>

          <Dialog.Cancel className='absolute text-zinc-400 right-6 top-6 hover:opacity-60'>
            <FiX fontSize={25} aria-label='Fechar Modal' />
          </Dialog.Cancel>

          <Dialog.Title className='text-3xl leading-tight font-extrabold'>
            Criar habito
          </Dialog.Title>

          <NewHabitsForms/>

        </Dialog.Content>

      </Dialog.Portal>

    </Dialog.Root>
  </div>
  )
}