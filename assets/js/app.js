// task 1
const students = [
   { 
    fname: 'rahul',
    lname: 'sharma',
    email: 'rahulsharma@gmail.com',
    contact: 5436728976
   }  ,

   { 
    fname: 'rohit',
    lname: 'sharma',
    email: 'rohitsharma@gmail.com',
    contact: 5436728998
   }, 
    { 
    fname: 'virat',
    lname: 'kohali',
    email: 'viratkohali@gmail.com',
    contact: 54367285433
   } ,
   { 
    fname: 'sachin',
    lname: 'tendulkar',
    email: 'sachintendulkar@gmail.com',
    contact: 54367287685
   } ,
   { 
    fname: 'hardik',
    lname: 'pandey',
    email: 'hardikpandey@gmail.com',
    contact: 543672876786
   } 
];

let result = "";

for (let i = 0; i < students.length; i++) {
    result += `
    <tr>
        <td>${i + 1}</td>
        <td>${students[i].fname}</td>
        <td>${students[i].lname}</td>
        <td>${students[i].email}</td>
        <td>${students[i].contact}</td>
        

        <td class="text-center">
            <i class="fa-regular fa-circle-check text-success" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-circle-xmark text-danger" role="button"></i>
        </td>
    </tr>
    `;
}

const student = document.getElementById('students');

student.innerHTML = result;

console.log(students);

// task 2
const products = [
    {
        name: 'Laptop',
        price: 55000,
        category: 'Electronics',
        quantity: 10
    },
    {
        name: 'Mobile',
        price: 25000,
        category: 'Electronics',
        quantity: 20
    },
    {
        name: 'Keyboard',
        price: 1200,
        category: 'Accessories',
        quantity: 15
    },
    {
        name: 'Mouse',
        price: 800,
        category: 'Accessories',
        quantity: 25
    },
    {
        name: 'Monitor',
        price: 15000,
        category: 'Electronics',
        quantity: 8
    }
];

 result = "";

for (let i = 0; i < products.length; i++) {
    result += `
    <tr>
        
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].quantity}</td>

        <td class="text-center">
            <i class="fa-regular fa-cart-shopping text-warning" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-hand-holding-dollar text-danger" role="button"></i>
        </td>
    </tr>
    `;
}

const product = document.getElementById('products');

product.innerHTML = result;

console.log(products);

// task 3
const employees = [
    {
        fname: 'Aisha',
        lname: 'Jahagirdar',
        email: 'aisha@gmail.com',
        salary: 30000
    },
    {
        fname: 'Priya',
        lname: 'Sharma',
        email: 'priya@gmail.com',
        salary: 35000
    },
    {
        fname: 'Aman',
        lname: 'Verma',
        email: 'aman@gmail.com',
        salary: 40000
    },
    {
        fname: 'Rahul',
        lname: 'Patil',
        email: 'rahul@gmail.com',
        salary: 32000
    },
    {
        fname: 'Sneha',
        lname: 'Joshi',
        email: 'sneha@gmail.com',
        salary: 38000
    }
];

let result1 = "";

for (let i = 0; i < employees.length; i++) {
    result1 += `
    <tr>
        <td>${i + 1}</td>
        <td>${employees[i].fname}</td>
        <td>${employees[i].lname}</td>
        <td>${employees[i].email}</td>
        <td>${employees[i].salary}</td>

        <td class="text-center">
            <i class="fa-regular fa-circle Check text-primary" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-clock text-warning" role="button"></i>
        </td>
    </tr>
    `;
}

const employee = document.getElementById('employees');

employee.innerHTML = result1;

console.log(employees);

// task 4
const books = [
    {
        title: 'Harry Potter',
        author: 'J.K Rowling',
        price: 500,
        year: 1997
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        price: 350,
        year: 1988
    },
    {
        title: 'Wings of Fire',
        author: 'A.P.J Abdul Kalam',
        price: 400,
        year: 1999
    },
    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        price: 600,
        year: 1997
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 450,
        year: 2018
    }
];

let result2 = "";

for (let i = 0; i < books.length; i++) {
    result2 += `
    <tr>
        <td>${i + 1}</td>
        <td>${books[i].title}</td>
        <td>${books[i].author}</td>
        <td>${books[i].price}</td>
        <td>${books[i].year}</td>

        <td class="text-center">
            <i class="fa-regular fa-cart-shopping text-success" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-hand-holding-dollar text-danger" role="button"></i>
        </td>
    </tr>
    `;
}

const book = document.getElementById('books');

book.innerHTML = result2;

console.log(books);

// task 5
const courses = [
    {
        title: 'Web Development',
        trainer: 'Rahul',
        fees: 15000,
        duration: '6 Months'
    },
    {
        title: 'Data Analytics',
        trainer: 'Priya',
        fees: 12000,
        duration: '4 Months'
    },
    {
        title: 'Java Programming',
        trainer: 'Aman',
        fees: 10000,
        duration: '3 Months'
    },
    {
        title: 'Python',
        trainer: 'Sneha',
        fees: 11000,
        duration: '4 Months'
    },
    {
        title: 'React JS',
        trainer: 'Rohit',
        fees: 9000,
        duration: '2 Months'
    }
];

let result3 = "";

for (let i = 0; i < courses.length; i++) {
    result3 += `
    <tr>
        <td>${i + 1}</td>
        <td>${courses[i].title}</td>
        <td>${courses[i].trainer}</td>
        <td>${courses[i].fees}</td>
        <td>${courses[i].duration}</td>

        <td class="text-center">
            <i class="fa-regular fa-pen-to-square text-success" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-trash text-danger" role="button"></i>
        </td>
    </tr>
    `;
}

const course = document.getElementById('courses');

course.innerHTML = result3;

console.log(courses);

// task 6
const movies = [
    {
        title: '3 Idiots',
        director: 'Rajkumar Hirani',
        rating: 9.0,
        year: 2009
    },
    {
        title: 'Dangal',
        director: 'Nitesh Tiwari',
        rating: 8.3,
        year: 2016
    },
    {
        title: 'Chhichhore',
        director: 'Nitesh Tiwari',
        rating: 8.3,
        year: 2019
    },
    {
        title: 'Taare Zameen Par',
        director: 'Aamir Khan',
        rating: 8.3,
        year: 2007
    },
    {
        title: 'Zindagi Na Milegi Dobara',
        director: 'Zoya Akhtar',
        rating: 8.2,
        year: 2011
    }
];
let result4 = "";

for (let i = 0; i < movies.length; i++) {
    result4 += `
    <tr>
        <td>${i + 1}</td>
        <td>${movies[i].title}</td>
        <td>${movies[i].director}</td>
        <td>${movies[i].rating}</td>
        <td>${movies[i].year}</td>

        <td class="text-center">
            <i class="fa-regular fa-eye text-success" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-trash text-danger" role="button"></i>
        </td>
    </tr>
    `;
}

const movie = document.getElementById('movies');

movie.innerHTML = result4;

console.log(movies);

// task 7
const cars = [
    {
        brand: 'BMW',
        model: 'X5',
        price: 8500000,
        year: 2024
    },
    {
        brand: 'Audi',
        model: 'Q7',
        price: 9000000,
        year: 2023
    },
    {
        brand: 'Mercedes',
        model: 'C-Class',
        price: 7000000,
        year: 2024
    },
    {
        brand: 'Jaguar',
        model: 'F-Pace',
        price: 7500000,
        year: 2023
    },
    {
        brand: 'Range Rover',
        model: 'Velar',
        price: 9500000,
        year: 2024
    }
];

let result5= "";

for (let i = 0; i < cars.length; i++) {
    result5 += `
    <tr>
        <td>${i + 1}</td>
        <td>${cars[i].brand}</td>
        <td>${cars[i].model}</td>
        <td>${cars[i].price}</td>
        <td>${cars[i].year}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-dark" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-regular fa-pen-to-square text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const car = document.getElementById('cars');

car.innerHTML = result5;

console.log(cars);

// task 8
const restaurants = [
    {
        name: 'Spice Garden',
        cuisine: 'Indian',
        location: 'Pune',
        rating: 4.5
    },
    {
        name: 'Food Palace',
        cuisine: 'Chinese',
        location: 'Mumbai',
        rating: 4.2
    },
    {
        name: 'Tasty Bites',
        cuisine: 'Italian',
        location: 'Delhi',
        rating: 4.7
    },
    {
        name: 'Royal Kitchen',
        cuisine: 'Punjabi',
        location: 'Hyderabad',
        rating: 4.4
    },
    {
        name: 'Green Leaf',
        cuisine: 'South Indian',
        location: 'Bangalore',
        rating: 4.6
    }
];

let result6 = "";

for (let i = 0; i < restaurants.length; i++) {
    result6 += `
    <tr>
        <td>${i + 1}</td>
        <td>${restaurants[i].name}</td>
        <td>${restaurants[i].cuisine}</td>
        <td>${restaurants[i].location}</td>
        <td>${restaurants[i].rating}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-primary" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-regular fa-pen-to-square text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const restaurant = document.getElementById('restaurants');

restaurant.innerHTML = result6;

console.log(restaurants);

// task 9
const hotels = [
    {
        name: 'Taj Palace',
        location: 'Mumbai',
        rooms: 120,
        price: 8500
    },
    {
        name: 'The Oberoi',
        location: 'Delhi',
        rooms: 100,
        price: 9500
    },
    {
        name: 'Hyatt Regency',
        location: 'Pune',
        rooms: 80,
        price: 7000
    },
    {
        name: 'Novotel',
        location: 'Hyderabad',
        rooms: 90,
        price: 6500
    },
    {
        name: 'Le Meridien',
        location: 'Bangalore',
        rooms: 110,
        price: 8000
    }
];

let result7 = "";

for (let i = 0; i < hotels.length; i++) {
    result7 += `
    <tr>
        <td>${i + 1}</td>
        <td>${hotels[i].name}</td>
        <td>${hotels[i].location}</td>
        <td>${hotels[i].rooms}</td>
        <td>${hotels[i].price}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-primary" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-bed text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const hotel = document.getElementById('hotels');

hotel.innerHTML = result7;

console.log(hotels);

// task 10
const flights = [
    {
        airline: 'IndiGo',
        from: 'Mumbai',
        to: 'Delhi',
        price: 5500
    },
    {
        airline: 'Air India',
        from: 'Pune',
        to: 'Bangalore',
        price: 6200
    },
    {
        airline: 'Vistara',
        from: 'Delhi',
        to: 'Mumbai',
        price: 7000
    },
    {
        airline: 'Akasa Air',
        from: 'Hyderabad',
        to: 'Pune',
        price: 4800
    },
    {
        airline: 'SpiceJet',
        from: 'Bangalore',
        to: 'Kolkata',
        price: 5900
    }
];

let result0 = "";

for (let i = 0; i < flights.length; i++) {
    result0 += `
    <tr>
        <td>${i + 1}</td>
        <td>${flights[i].airline}</td>
        <td>${flights[i].from}</td>
        <td>${flights[i].to}</td>
        <td>${flights[i].price}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-primary" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-ticket text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const flight = document.getElementById('flights');

flight.innerHTML = result0;

console.log(flights);

// task 11
const hospitals = [
    {
        name: 'Apollo Hospital',
        city: 'Hyderabad',
        doctors: 50,
        rating: 4.5
    },
    {
        name: 'Ruby Hall Clinic',
        city: 'Pune',
        doctors: 40,
        rating: 4.3
    },
    {
        name: 'Fortis Hospital',
        city: 'Mumbai',
        doctors: 60,
        rating: 4.6
    },
    {
        name: 'AIIMS Hospital',
        city: 'Delhi',
        doctors: 80,
        rating: 4.8
    },
    {
        name: 'Kokilaben Hospital',
        city: 'Mumbai',
        doctors: 55,
        rating: 4.7
    }
];

let result11 = "";

for (let i = 0; i < hospitals.length; i++) {
    result11 += `
    <tr>
        <td>${i + 1}</td>
        <td>${hospitals[i].name}</td>
        <td>${hospitals[i].city}</td>
        <td>${hospitals[i].doctors}</td>
        <td>${hospitals[i].rating}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-primary" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-calendar-check text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const hospital = document.getElementById('hospitals');

hospital.innerHTML = result11;

console.log(hospitals);

// task 12
const accounts = [
    {
        name: 'Aisha',
        accountNo: 1001,
        balance: 45000,
        type: 'Savings'
    },
    {
        name: 'Priya',
        accountNo: 1002,
        balance: 62000,
        type: 'Current'
    },
    {
        name: 'Aman',
        accountNo: 1003,
        balance: 38000,
        type: 'Savings'
    },
    {
        name: 'Rahul',
        accountNo: 1004,
        balance: 75000,
        type: 'Current'
    },
    {
        name: 'Sneha',
        accountNo: 1005,
        balance: 52000,
        type: 'Savings'
    }
];

let result12 = "";

for (let i = 0; i < accounts.length; i++) {
    result12 += `
    <tr>
        <td>${i + 1}</td>
        <td>${accounts[i].name}</td>
        <td>${accounts[i].accountNo}</td>
        <td>${accounts[i].balance}</td>
        <td>${accounts[i].type}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-primary" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-money-bill-transfer text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const account = document.getElementById('accounts');

account.innerHTML = result12;

console.log(accounts);

// task 13
const libraryBooks = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        category: 'Fiction',
        status: 'Available'
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        category: 'Self Help',
        status: 'Issued'
    },
    {
        title: 'Wings of Fire',
        author: 'A.P.J Abdul Kalam',
        category: 'Biography',
        status: 'Available'
    },
    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        category: 'Finance',
        status: 'Issued'
    },
    {
        title: 'Harry Potter',
        author: 'J.K Rowling',
        category: 'Fantasy',
        status: 'Available'
    }
];

let result13 = "";

for (let i = 0; i < libraryBooks.length; i++) {
    result13 += `
    <tr>
        <td>${i + 1}</td>
        <td>${libraryBooks[i].title}</td>
        <td>${libraryBooks[i].author}</td>
        <td>${libraryBooks[i].category}</td>
        <td>${libraryBooks[i].status}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-primary" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-book-open text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const library = document.getElementById('libraryBooks');

library.innerHTML = result13;

console.log(libraryBooks);

// task 14
const members = [
    {
        name: 'Aisha',
        plan: 'Monthly',
        trainer: 'Rahul',
        fees: 2000
    },
    {
        name: 'Priya',
        plan: 'Quarterly',
        trainer: 'Aman',
        fees: 5000
    },
    {
        name: 'Sneha',
        plan: 'Monthly',
        trainer: 'Rohit',
        fees: 2000
    },
    {
        name: 'Rahul',
        plan: 'Yearly',
        trainer: 'Vikas',
        fees: 18000
    },
    {
        name: 'Aman',
        plan: 'Quarterly',
        trainer: 'Raj',
        fees: 5000
    }
];

let result14 = "";

for (let i = 0; i < members.length; i++) {
    result14 += `
    <tr>
        <td>${i + 1}</td>
        <td>${members[i].name}</td>
        <td>${members[i].plan}</td>
        <td>${members[i].trainer}</td>
        <td>${members[i].fees}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-warning" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-user-check text-dark" role="button"></i>
        </td>

        
    </tr>
    `;
}

const member = document.getElementById('members');

member.innerHTML = result14;

console.log(members);

// task 15
const orders = [
    {
        customer: 'Aisha',
        product: 'Laptop',
        quantity: 1,
        price: 55000
    },
    {
        customer: 'Priya',
        product: 'Mobile',
        quantity: 2,
        price: 25000
    },
    {
        customer: 'Aman',
        product: 'Keyboard',
        quantity: 1,
        price: 1200
    },
    {
        customer: 'Rahul',
        product: 'Headphones',
        quantity: 2,
        price: 2500
    },
    {
        customer: 'Sneha',
        product: 'Mouse',
        quantity: 3,
        price: 800
    }
];

let result15 = "";

for (let i = 0; i < orders.length; i++) {
    result15 += `
    <tr>
        <td>${i + 1}</td>
        <td>${orders[i].customer}</td>
        <td>${orders[i].product}</td>
        <td>${orders[i].quantity}</td>
        <td>${orders[i].price}</td>

        <td class="text-center">
            <i class="fa-solid fa-eye text-dark" role="button"></i>
        </td>

        <td class="text-center">
            <i class="fa-solid fa-truck text-success" role="button"></i>
        </td>

        
    </tr>
    `;
}

const order = document.getElementById('orders');

order.innerHTML = result15;

console.log(orders);