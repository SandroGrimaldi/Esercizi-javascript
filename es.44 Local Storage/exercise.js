const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user){
  const userTransformation= JSON.stringify(user);
  localStorage.setItem('user', userTransformation);
}

saveUser(user);

function getUser(){
  const userLoading= localStorage.getItem('user')
  if(userLoading) {
    const user = JSON.parse(userLoading);
    return user;
  }
}

console.log(getUser());