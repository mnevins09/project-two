// ===============================================================================
// DATA
// Below data will hold all of the appointments.
// We have input a test or "dummy" customer for testing purposes.
// An empty array would work as well.
// ===============================================================================

var datesArray = [
  {
    customerName: "Lydia",
    customerEmail: "lydia@example.com",
    customerID: "lfhaque89",
    phoneNumber: "000-000-0000",
    serviceRequest: "service",
    serviceDate: "09/01/2018"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = datesArray;
