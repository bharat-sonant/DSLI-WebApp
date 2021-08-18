// import { Injectable } from '@angular/core';
//  // Student data type interface class
// import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


// @Injectable({
//   providedIn: 'root'
// })

// export class CrudService {
//   studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
//   studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  
//   usersRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
//   userRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

//   productsRef:AngularFireList<any>;
//   productRef:AngularFireObject<any>;

   
//   // Inject AngularFireDatabase Dependency in Constructor
//   constructor(private db: AngularFireDatabase) { }


//   // Products
//   // Create Product
  
//   AddProduct(product:any){
// this.productsRef.push({
//   productName:product.productName,
//   productCode:product.productCode,
//   productPrice:product.productPrice
// })
//   }


//   GetAllProduct(){
//     this.productRef=this.db.object('products');
//     return this.productRef;
//   }

//   GetProduct(){
// this.productRef=this.db.object('products');
// return this.productRef;
//   }

//   DeleteProduct(id:string){
//     this.productRef=this.db.object('products/'+id);
//     this.productRef.remove();
//   }

//   UpdateProduct(product:Products)
//   {
//     this.productRef.update({
//       name:product.productName,
//       code:product.productCode,
//       price:product.productPrice
//     })
//   }

//   // Create Student
//   AddStudent(student: Student) {
//     this.studentsRef.push({
//       firstName: student.firstName,
//       lastName: student.lastName,
//       email: student.email,
//       mobileNumber: student.mobileNumber
//     })
//   }

//   // Fetch Single Student Object
//   GetStudent(id: string) {
//     this.studentRef = this.db.object('students-list/' + id);
//     return this.studentRef;
//   }

//   // Fetch Students List
//   GetStudentsList() {
//     this.studentsRef = this.db.list('students-list');
//     return this.studentsRef;
//   }  

//   // Update Student Object
//   UpdateStudent(student: Student) {
//     this.studentRef.update({
//       firstName: student.firstName,
//       lastName: student.lastName,
//       email: student.email,
//       mobileNumber: student.mobileNumber
//     })
//   }  

//   // Delete Student Object
//   DeleteStudent(id: string) { 
//     this.studentRef = this.db.object('students-list/'+id);
//     this.studentRef.remove();
//   }


//    // Create User
//    AddUser(user: Users) {
//     this.usersRef.push({
//       name: user.name,
//       email: user.email,
//       address: user.address
//     })
//   }

//   // Update User Object
//   UpdateUser(user: Users) {
//     this.userRef.update({
//       name: user.name,
//       email: user.email,
//       address: user.address
//     })
//   }  

// // Fetch Single User Object
// GetUser(id: string) {
//   this.userRef = this.db.object('users/' + id);
//   return this.userRef;
// }

//    // Fetch Users List
//    GetUsersList() {
//     this.usersRef = this.db.list('users');
//     return this.usersRef;
//   }  

//   // Delete User Object
//   DeleteUser(id: string) { 
//     this.userRef = this.db.object('users/'+id);
//     this.userRef.remove();
//   }

//   classsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
//   classRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

//   AddClass(classs: Classes) {
//     this.classsRef.push({
//       className: classs.className
//     })
//   }

//   subjectsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
//   subjectRef: AngularFireObject<any>; 

//   AddSubject(subjects:any)
//   {
//     this.subjectsRef.push(subjects)
// }


//   UpdateClass(classs:Classes)
//   {
//     this.classRef.update({
//       className: classs.className
//     })
//   }

//   GetClassList(){
//     this.classsRef=this.db.list('classes');
//     return this.classsRef;
//   }
  

//   GetClass(id: string) {
//     this.classRef = this.db.object('classes/' + id);
//     return this.classRef;
//   }

//   DeleteClass(id: string) { 
//     this.classRef = this.db.object('classes/'+id);
//     this.classRef.remove();
//   }
//   GetSubjectList()
//   {
//     this.subjectsRef=this.db.list('subjects')
//     return this.subjectsRef
//   }

//   GetSubject(id:string)
//   {
//     this.subjectRef=this.db.object('subjects/'+id);
//     return this.subjectRef;
//   }
//   DeleteSubject(id: string) { 
//     this.subjectRef = this.db.object('subjects/'+id);
//     this.subjectRef.remove();
//   }

//   UpdateSubject(classs:any)
//   {
//     this.subjectRef.update({
//     subjectName: classs.subjectName,
//     className:classs.className

//     })
  
//   } 

  

  
//   }
