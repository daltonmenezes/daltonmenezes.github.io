const birthday = {
  getAge: function(date_of_birth) {
    return this._birthdayCalculate(date_of_birth)
  },
  
  _birthdayCalculate: date_of_birth => {
    const birthday = new Date(date_of_birth)
    const today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()

    birthday.setFullYear(today.getFullYear())

    if (today < birthday) {
        age--
    }
    
    return age  
  }  
}