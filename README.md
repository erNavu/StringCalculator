# Overview

This project is a `String Calculator application`. It aims to provide a simple interface for users to input a string of numbers separated by delimiters and calculate their sum. The application includes features such as handling custom delimiters, error messages for invalid inputs, and preventing the use of negative numbers. It is built using React and follows best practices for modern web development.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Features

- **String Input**: Users can input a string of numbers separated by commas or newlines.
    1. Input: “”, => should return Output: 0
    2. Input: “1”,  =>  should return Output: 1
    3. Input: “1,5”, => should return Output: 6
    4. Input "1\n2,3" => should return output : 6
- **Custom Delimiters**: Supports custom delimiters specified in the input string.
    - To change the delimiter, the beginning of the string will contain a separate line that looks like this: `"//[delimiter]\n[numbers...]"`. For example,` "//;\n1;2"` where the delimiter is `";"` should return `3`.
- **Error Handling**: Displays error messages for invalid inputs, such as negative numbers.
    - Calling add with a negative number will throw an exception: `"negative numbers not allowed <negative_number>".`
    - If there are multiple negative numbers, show all of them in the exception message, separated by commas.
- **Real-time Calculation**: Calculates and displays the sum of the input numbers in real-time.

# Project Structure

- **src/Calculator.js**: Contains the main Calculator component that handles user input and displays results.
- **src/addition.js**: Contains the logic for parsing the input string and calculating the sum.
- **src/App.js**: The root component that renders the Calculator component.
- **public/**: Contains the public assets and the HTML template.

# How to Use

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser.
6. Enter a string of numbers in the input field and click "Calculate" to see the result.

# Contributing

We welcome contributions to improve the project. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.