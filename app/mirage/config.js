const speakers = {
  speakers: [
    {
      id: 1,
      name: 'Mohit Kanwal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor.',
      company: 'XXX Company',
      avatar: ''
    },
    {
      id: 2,
      name: 'John Cena',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor.',
      company: 'XXX Company',
      avatar: ''
    },
    {
      id: 3,
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor.',
      company: 'XXX Company',
      avatar: ''
    },
    {
      id: 4,
      name: 'Peter Pan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus sed tellus pharetra bibendum vitae ut nisi. Ut at dui dolor.',
      company: 'XXX Company',
      avatar: ''
    }
  ]
};

const sessions = {
   sessions: [
    {
     id: 1,
     name: 'How to write code',
     start_time: '9:00 AM',
     end_time: '10:00 AM',
     date: new Date(),
     category: 'Random',
     venue: 'Somewhere'
    },
    {
     id: 2,
     name: 'Snack',
     start_time: '10:00 AM',
     end_time: '10:30 AM',
     date: new Date(),
     category: 'Random',
     venue: 'Somewhere'
    },
    {
     id: 3,
     name: 'Drinks',
     start_time: '11:00 AM',
     end_time: '12:00 AM',
     date: new Date(),
     category: 'Random',
       venue: 'Somewhere'
    }
  ]
};

const sponsors = {
  sponsors: [
    {
      id: 1,
      name: 'Google',
      url: 'https://google.com',
      logo: ''
    },
    {
      id: 2,
      name: 'Redhat',
      url: 'https://redhat.com',
      logo: ''
    },
    {
      id: 3,
      name: 'MySQL',
      url: 'http://mysql.com',
      logo: ''
    },
    {
      id: 4,
      name: 'WWE',
      url: 'http://wwe.com',
      logo: ''
    }
  ]
};

export default function() {
  this.get('/speakers', () => {
    return speakers;
  });

  this.get('/sessions', () => {
    return sessions;
  });

  this.get('/sponsors', () => {
    return sponsors;
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
