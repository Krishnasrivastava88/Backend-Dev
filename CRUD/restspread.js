const emp={
  id:1,
  name:"ram",
  salary:"123456",
  address:"delhi",
  age:25,
  department:"Hr"
}
const empCopy={...emp}
const{id,name,salary, ...otherInfo}=emp;
console.log(otherInfo)
console.log(empCopy)
const updatedEmp = {
  ...emp,
  address: "Mumbai"
};

console.log(updatedEmp);