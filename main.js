$('#submit').on('click', function (e) {
    e.preventDefault();
    const newTrain = {
        trainName: $('#trainName').val(),
        destination: $('#destination').val(),
        firstTrain: $('#firstTrain').val(),
        frequency: $('#Frequency').val(),
    }
    firebase.database().ref('trains').push(newTrain);

})


// firebase.database().ref('trains').on('child_added', function (snapShot) {
//     console.log(snapShot.val());
//     const addTrain = snapShot.val();
//     $('#tbody')
//         .append(
//         `<tr>
//         <td>${addTrain.trainName}</td>
//         <td>${addTrain.destination}</td>
//         <td>${addTrain.frequency}</td> 
//         <td>${addTrain.nextArrival}</td>
//         <td>${addTrain.minutesAway}</td>
//         </tr>`
//         )
// })

firebase.database().ref('trains').on('child_added', function (snapShot) {
    console.log(snapShot.val());
    const addTrain = snapShot.val();
    $('#tbody')
        .append(
        `<tr>
        <td>${addTrain.trainName}</td>
        <td>${addTrain.destination}</td>
        <td>${addTrain.frequency}</td> 
        <td>${addTrain.nextArrival}</td>
        <td>${addTrain.minutesAway}</td>
        </tr>`
        )
}) //double check
 // First Time (pushed back 1 year to make sure it comes before current time)
 var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
 console.log(firstTimeConverted);

 // Current Time
 var currentTime = moment();
 console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

 // Difference between the times
 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 console.log("DIFFERENCE IN TIME: " + diffTime);

 // Time apart (remainder)
 var tRemainder = diffTime % tFrequency;
 console.log(tRemainder);

 // Minute Until Train
 var tMinutesTillTrain = tFrequency - tRemainder;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

 // Next Train
 var nextTrain = moment().add(tMinutesTillTrain, "minutes");
 console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));