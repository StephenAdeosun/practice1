// Using the FS module:Create directory/folder named: “Students”

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'Students');   
fs.mkdir(dir, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Directory created successfully!');
}
);


// In the Students directory, create a file named user.js
// create a file named user.js
// const file = path.join(__dirname, 'Students', 'user.js');
// fs.writeFile(file, 'Hello World!', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created successfully!');
// }
// );

// Update the Students directory to “Names”
// const newFolder = path.join(__dirname, 'Students', 'Names')
// fs.rename(dir, newFolder, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     } 
//     console.log('Folder renamed successfully')
// })


const newFolder = path.join(__dirname, 'Students', 'new_folder_renamed')
fs.rename(dir, newFolder, (err) => {
    if (err) {
        console.log(err)
        return
    } 
    console.log('Folder renamed successfully')
}
);




// Add your name as content to the file user.js
// const file = path.join(__dirname, 'Students', 'user.js');
// fs.writeFile(file, 'Stephen💎', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created successfully!');
// }
// );

// Update the file and add your age, sex, nationality, phone number and any other information about yourself
const file = path.join(__dirname, 'Students', 'user.js');
fs.appendFile(file, '\n17yrs', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File created successfully!');
}
);
