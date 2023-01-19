import { FiPlus } from 'react-icons/fi'
import LogoImage from '../assets/logo.svg'

export function Header(){
  return(
  <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
  <img src={ LogoImage } alt="imagem da logo" />

    <button type='button'
    className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex gap-3 justify-between items-center hover:border-violet-300 transition delay-200'>
      <FiPlus size={20} className='text-violet-500'/>

      Novo Habito
    </button>

  </div>
  )
}