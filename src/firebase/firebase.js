import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default}

// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log('Removed-',snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log('changed-',snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log('added-',snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//         expenses.push({
//             id: childSnapShot.key,
//             ...childSnapShot.val()
//         });
//     });
//     console.log(expenses);
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description:'Test desc 1',
//     note:'Test Note 1',
//     amount: 100,
//     createdAt:286745
// });

// database.ref().on('value',(snapshot)=>{
//     const resp = snapshot.val();
//     console.log(`${resp.name} is a ${resp.job.title} at ${resp.job.company}.`);
// });

// database.ref().update({
//     name: 'Giritharan',
//     'job/company': 'Infosys Limited',
// });

// database.ref().set({
//     name:'P Giritharan',
//     age: 25,
//     stressLevel:6,
//     job:{
//         title: "senior systems engineer",
//         company: "Infosys Limited"
//     },
//     location:{
//         city: 'Banglore',
//         Country: 'India'
//     }
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Chennai'
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         console.log(snapshot.val());
//     })
//     .catch((error)=>{
//         console.log("Error:", error);
//     })

// database.ref().remove().then(()=>{
//     console.log('Data is removed');
// }).catch((e)=>{
//     console.log(e.message);
// })