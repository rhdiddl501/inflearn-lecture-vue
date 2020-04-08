const data = [
    {
      id: 1,
      name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyFA0kBuJ89qSO5K8tNkFh7yu9vIDhHDRiSLOFDITkELGodp9c&usqp=CAU'
    },
    {
      id: 2,
      name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
      image: 'https://www.bonappetour.com/blog/wp-content/uploads/2015/03/1426576690-7820792-1030x521.jpeg'
    }
  ]
  
  export default {
    list(query) {
      return new Promise(res => {
        setTimeout(()=> {
          res(data)
        }, 200);
      })
    }
  }