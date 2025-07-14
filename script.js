// JavaScript Functionality
function copyPhoneNumber(number) {
  navigator.clipboard.writeText(number).then(function () {
    alert('تم نسخ الرقم: ' + number);
  }, function (err) {
    console.error('فشل في نسخ الرقم: ', err);
  });
}