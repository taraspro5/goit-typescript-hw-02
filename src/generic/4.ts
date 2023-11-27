/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Title {
  title: 'some title',
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Title> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};