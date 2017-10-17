birthday = {
  getAge: function(date_of_birth) {
    return this._birthdayCalculate(date_of_birth);
  },
  
  _birthdayCalculate: function(date_of_birth) {
    var birthday = new Date(date_of_birth);  
    var today = new Date();  
    var age = today.getFullYear() - birthday.getFullYear();  

    birthday.setFullYear(today.getFullYear());  

    if (today < birthday)  
    {  
      age--;  
    }
    return age;  
  }  
}