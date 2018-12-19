export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Vocabulary Game',
      url: '/voca-game',
      icon: 'icon-star',
      children: [
        {
          name: 'Topic',
          url: '/voca-game',
          icon: 'icon-star'
        },
        {
          name: 'Questions',
          url: '/voca-game/questions',
          icon: 'icon-star'
        },
        {
          name: 'Histories',
          url: '/voca-game/histories',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
