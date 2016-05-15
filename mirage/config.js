export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.get('/rentals/:id', function(db, request) {
    console.log(request);
    let rentals = [
      {
        type: 'rentals',
        id: 1,
        attributes: {
          "title": "Grand Old Mansion",
          "owner": "Veruca Salt",
          "city": "San Francisco",
          "type": "Estate",
          "bedrooms": 15,
          "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
        }
      },
      {
        type: 'rentals',
        "id": 2,
        attributes: {
          "title": "Urban Living",
          "owner": "Mike Teavee",
          "city": "Seattle",
          "type": "Condo",
          "bedrooms": 1,
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
        }
      },
      {
        type: 'rentals',
        "id": 3,
        attributes: {
          "title": "Downtown Charm",
          "owner": "Violet Beauregarde",
          "city": "Portland",
          "type": "Apartment",
          "bedrooms": 3,
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
        }
      }
    ];

    const selectedRental = rentals.find(function(rental) {
     return rental.id.toString() === request.params.id;
    });

    return { data: selectedRental };
  });

  this.get('/rentals', function(db, request) {
    let rentals = [
      {
        type: 'rentals',
        id: 1,
        attributes: {
          "title": "Grand Old Mansion",
          "owner": "Veruca Salt",
          "city": "San Francisco",
          "type": "Estate",
          "bedrooms": 15,
          "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
        }
      },
      {
        type: 'rentals',
        "id": 2,
        attributes: {
          "title": "Urban Living",
          "owner": "Mike Teavee",
          "city": "Seattle",
          "type": "Condo",
          "bedrooms": 1,
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
        }
      },
      {
        type: 'rentals',
        "id": 3,
        attributes: {
          "title": "Downtown Charm",
          "owner": "Violet Beauregarde",
          "city": "Portland",
          "type": "Apartment",
          "bedrooms": 3,
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
        }
      }
    ];

    if (request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }

  });


  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}
