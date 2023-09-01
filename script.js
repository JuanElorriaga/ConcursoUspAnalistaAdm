document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();

    const targetDayElement = document.getElementById(dayOfMonth.toString());
    if (targetDayElement) {
      targetDayElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });