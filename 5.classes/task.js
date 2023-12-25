class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(state) {
      if (state < 0) {
        this._state = 0;
      } else if (state > 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  class Library {
    constructor(name = " ") {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book); // тут есть вопрос
      }
    }
    findBookBy(type, value) {
      return this.books.find((book) => book[type] === value) || null;
    }
    giveBookByName(bookName) {
      const book = this.findBookBy("name", bookName);
      if (book) {
        this.books.splice(this.books.indexOf(book), 1);
      }
      return book;
    }
  }
  
  const homeLibrary = new Library("Домашняя библиотека");
  
  homeLibrary.addBook(new DetectiveBook("Эдгар Аллан По", "Убийство на улице Морг", 1841, 288));
  homeLibrary.addBook(new DetectiveBook("Уилки Коллинз", "Лунный камень", 1868, 512));
  homeLibrary.addBook(new FantasticBook("Сергей Тармашев", "Жажда власти 5. Фрагментация", 2024, 451));
  homeLibrary.addBook(new FantasticBook("Эл Моргон", "Злодейский путь!..", 2023, 584));
  homeLibrary.addBook(new NovelBook("Пылаев К.И", "В плену на родине", 1919, 325));
  homeLibrary.addBook(new Magazine("Библиограф", 1869, 30));
  
  console.log(homeLibrary.findBookBy("releaseDate", 1919).name);            // В плену на родине
  console.log("Количество книг до выдачи: " + homeLibrary.books.length);    // 6
  const tmp = homeLibrary.giveBookByName("Лунный камень");                  // получаем и записываем во временную переменную
  console.log("Количество книг после выдачи: " + homeLibrary.books.length); // 5
  
  console.log((tmp.state = 30)); // ломаем
  tmp.fix();                     // чиним
  console.log(tmp.state);        // проверяем состояние
  homeLibrary.addBook(tmp);      // возращаем
  console.log("Количество книг после возвращения: " + homeLibrary.books.length); // снова 6
  