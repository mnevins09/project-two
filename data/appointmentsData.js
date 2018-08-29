// ===============================================================================
// DATA
// Below data will hold all of the appointment data.
// We have added one "dummy" appointment for testing purposes.
// An empty array woudl work as well.
// ===============================================================================

var appointmentsArray = [
  {
    customerName: "Shadonna",
    customerEmail: "shadonna@example.com",
    phoneNumber: "000-000-0000",
    customerID: "shadonnaPretty",
    serviceRequest: "massage",
    serviceDate: "09/01/2018"
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = appointmentsArray;
