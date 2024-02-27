export const NavData=[
    {
        routeLink: 'dashboard',
        icon : 'fa-solid fa-house-chimney',
        label:'dashboard'
    },
    {
      routeLink: 'users',
      icon : 'fa-solid fa-users',
      label:'users'
  },
  {
    routeLink: 'meals',
    icon : 'fa-solid fa-utensils',
    label:'meals'
},
{
  routeLink: 'orders',
  icon : 'fa-solid fa-box-open',
  label:'orders'
}
]



  export interface ISideNAvToggle{
    screenWidth:number,
    collapsed:boolean
  }