const initialState = {
    posts: [
      {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        category: 'sport',
        author: 'John Doe'
      },
      {
        id: '2',
        title: 'Article title II',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        category: 'news',
        author: 'John Doe'
      },
      {
        id: '3',
        title: 'Article title III',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        category: 'movies',
        author: 'John Doe'
      },
  
    ],
  
    postsCategory: [
      { id: '1', description: 'news'  },
      { id: '2', description: 'sport' },
      { id: '3', description: 'movies' }
    ]
  
  
  };
  
  export default initialState;