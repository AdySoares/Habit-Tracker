export function generateProgressPercentage( completed: number, amount: number){
 return Math.round((completed/ amount) * 100 )
}