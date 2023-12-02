# User Authentication and Profile Management System

This project is a basic example of a user authentication system with profile management using HTML, JS, CSS, PHP, and databases like MySQL and MongoDB. It also utilizes jQuery AJAX for backend communication, Redis for session storage, and Bootstrap for responsive design.


This project is built using a variety of technologies to create a user authentication and profile management system. The key technologies include:

- **HTML:** Responsible for the structure and layout of web pages. The registration, login, and profile pages are implemented using HTML.

- **CSS:** Used for styling the web pages and ensuring a visually appealing and responsive user interface. Custom styles are defined in the `css/register-login.css` file.

- **JavaScript (JS):** Utilized for client-side interactivity and dynamic behavior. jQuery, a JavaScript library, is employed for AJAX calls to interact with the backend. The JavaScript code can be found in the `js/` directory.

- **PHP:** Powers the server-side logic, handling user registration, login, and profile actions. MySQL and MongoDB are used as databases, and Redis for session storage. PHP scripts are located in the `php/` directory.

- **Redis:** Used for session information storage on the server-side. The connection to Redis is established in the `redis/redis_connection.php` file.

- **MongoDB:** Employed for storing user profile details. The MongoDB connection is configured in the `db/Mongo\Client.php` file.

- **MySQL:** Used for storing registered user data securely. Prepared statements are implemented to prevent SQL injection. The MySQL connection details are set up in the `db/mysqli.php` file.


### Project Structure

- **index.html**: Signup page
- **login.html**: Login page
- **profile.html**: User profile page
- **css/style.css**: Stylesheet for custom styling
- **js/jquery.min.js**: jQuery library
- **js/script.js**: Custom JavaScript for AJAX calls
- **php/register.php**: PHP script for user registration (MySQL database connection setup)
- **php/login.php**: PHP script for user login (Redis connection setup)
- **php/profile.php**: PHP script for handling user profile actions(MongoDB connection setup)

# Flow : Register > Login > Profile



### Database Usage

- **MySQL**: Used for storing user registration data. Prepared statements are used to ensure security.
- **MongoDB**: Used for storing user profile details.

### Frontend

- Bootstrap is used for designing the forms to maintain page responsiveness.

### Backend

- jQuery AJAX is used for interacting with the backend.
- PHP scripts handle registration, login, and profile actions.
- Redis is used to store session information.

### Instructions

1. Clone the repository: `git clone https://github.com/1rn20cs049-Harikrishna/Harikrishna_1rn20cs049_RNSIT.git`
2. Set up your MySQL and MongoDB databases.
3. Update database connection details in `db/mysqli.php` and `db/Mongo\Client.php`.
4. Access the application through the browser.



### Screenshots
#### SignUP
  - **User Check on Registration:**
  - When a new user attempts to register (`register.php`), the system checks whether the chosen email already exists in the database.
  - If the username or email is already in use, the registration will be declined, and the user will be prompted to choose a different  use a different email address.

### Password Requirements:

- **Secure Password Storage:**
  - User passwords are securely stored in the database using encryption or hashing techniques (bcrypt implement this in your PHP scripts).

- **Password Strength Requirements:**
  - Passwords are required to meet specific strength criteria, such as a minimum length(8).
  - The frontend (JavaScript) and backend (PHP) work together to enforce these requirements during registration and password updates.
![Signup Page](https://res.cloudinary.com/harikrishnar/image/upload/v1701501011/registration_jeddpx.png)


#### SignIn
 **Error Handling:**
   - If the entered credentials are incorrect, an error message will be displayed.

 **Successful Login:**
   - Upon successful authentication, users are redirected to their profile page (`profile.html`).
   - To maintain the login session (localStorage is maintained with email and time of login )

![Login Page](https://res.cloudinary.com/harikrishnar/image/upload/v1701501011/signIn_nmjvya.png)

#### Profile Page
##### Email Presence Check in LocalStorage

This application incorporates a check for the presence of a user's email in the `localStorage`. If the email is not found, the user is automatically redirected to the login page to ensure a secure and authenticated user experience.

##### Email Presence Check:

- **During Page Load:**
  - When a protected page (e.g., `profile.html`) loads, the application checks if the user's email is stored in the `localStorage`.

- **Redirect to Login Page:**
  - If the user's email is not found in the `localStorage`, the application redirects the user to the login page (`login.html`).


![Profile Page](https://res.cloudinary.com/harikrishnar/image/upload/v1701505152/profile_cbp9aj.png)


#### localStorage
# Login Session Management with localStorage

This application utilizes the `localStorage` feature in the browser to maintain a user's login session. Here's how the process works:

### Login Session Management:

- **Upon Successful Login:**
  - When a user successfully logs in (handled by `login.php`), their email is stored in the browser's `localStorage`.

- **Checking Email Presence:**
  - On subsequent visits or page loads, the application checks for the presence of the user's email in the `localStorage`.

- **Redirect to Login Page if Email Absent:**
  - If the user's email is not found in the `localStorage`, the application redirects them to the login page (`login.html`).

![localStorage Page](https://res.cloudinary.com/harikrishnar/image/upload/v1701505151/localStorage_fer12d.png)



#### MONGO DB (a NoSQL database)
![MongoDB Page](https://res.cloudinary.com/harikrishnar/image/upload/v1701505151/mongodb_ubydid.png)



#### MYSQL DB (a SQL database)
![MysqlDB Page](https://res.cloudinary.com/harikrishnar/image/upload/v1701505791/mysql_zs4y4g.png)



### Contributions

Feel free to contribute to the project by submitting issues or pull requests.

### License
