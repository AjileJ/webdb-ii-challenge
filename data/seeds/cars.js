
exports.seed = function(knex, Promise) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { vin: '283947201',  make: 4000.00 , model: 'ford',mileage: '243'},
        { vin: '2839472-02', make: 206.75  , model: 'ford',mileage: '243'},
        { vin: '2839472-03', make: 6789.00 , model: 'ford',mileage: '243'},
        { vin: '2839472-04', make: 199.99  , model: 'ford',mileage: '243'},
        { vin: '2839472-05', make: 22.34   , model: 'ford',mileage: '243'},
        { vin: '2839472-06', make: 300.00  , model: 'ford',mileage: '243'},
        { vin: '2839472-07', make: 7000.00 , model: 'ford',mileage: '243'},
        { vin: '2839472-08', make: 78800.00, model: 'ford',mileage: '243'},
        { vin: '2839472-09', make: 3030.30 , model: 'ford',mileage: '243'},
        { vin: '2839472-10', make: 19.56   , model: 'ford',mileage: '243'},
        { vin: '2839472-11', make: 19.91   , model: 'ford',mileage: '243'},
        { vin: '2839472-12', make: 7080.00 , model: 'ford',mileage: '243'},
        { vin: '2839472-13', make: 1234.00 , model: 'ford',mileage: '243'},
      ]);
    });
};