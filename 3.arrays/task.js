//          Task 1
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}


//          Task 2
function getUsersNamesInAgeRange(users, gender) {

  if (users.length === 0 || gender != "мужской" && gender != "женский") {
      return 0;
  }

  let getUsers = users.filter(user => user.gender === gender);
  return getUsers.map(user => user.age).reduce((acc, age) => acc + age, 0) / getUsers.length;

}


 // let result = arr.filter(...).map(...).reduce(...)

 // В этом варианте приходится 2 раза фильтровать пользователей, лучше сразу завести переменную и положить их туда,
 // для дальнейшего использования переменной.         

 // let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age) => acc + age, 0);
 // return result /users.filter(user => user.gender === gender).length