var container = document.querySelector(".container");
// function getPost() {


//   fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // Renamed the variable to 'data' directly
//       console.log("data", data);
//       for (var obj of data) {
//         // Use for-of loop here
//         const card = ` <div class="card" style="width: 18rem;">
//                 <img src="./Assets/scott-webb-oRWRlTgBrPo-unsplash.jpg" class="card-img-top"alt="...">
//                       <div class="card-body">
//                               <h5 class="card-title">${obj.title}</h5>
//                               <p class="card-text">${obj.body}</p>
//                       </div>
//               </div>`;
//         container.innerHTML += card;
//       }
//     })
//     .catch(function (error) {
//       console.log("error", error);
//     });
// }

// // hello
async function getPost(){
        try{
               const myData= await fetch("https://jsonplaceholder.typicode.com/posts/")
               const response = await myData.json();
        //        console.log(response);
               for (var obj of response) {
                        const card = ` <div class="card" style="width: 18rem;">
                                <img src="./Assets/scott-webb-oRWRlTgBrPo-unsplash.jpg" class="card-img-top"alt="...">
                                      <div class="card-body">
                                              <h5 class="card-title">${obj.title}</h5>
                                              <p class="card-text">${obj.body}</p>
                                      </div>
                              </div>`;
                        container.innerHTML += card;
                      }
                    
        }catch(error){
                console.log("catch error", error);
        }
}