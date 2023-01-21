import * as Progress from '@radix-ui/react-progress'

interface ProgressNumber{
  progress: number,
}

export function ProgressiveBarCheckedHabits({ progress }: ProgressNumber){
  return(
    <Progress.Root className="w-80 h-3 relative overflow-hidden bg-violet-700 rounded-lg" value={100}>
    <Progress.Indicator
      className="w-full h-full bg-zinc-700"
      style={{ transform: `translateX(${progress}%)`, transition: `transform 660ms cubic-bezier(0.65, 0, 0.35, 1)` }}
    
    />
  </Progress.Root>

  )
}