//jshint esversion : 8
class UI
{
    constructor(){
        this.init();

    }
    init(){
        this.printCategories();

        this.result= document.getElementById('result');
        
    }


   displayEvents(events){
       //console.log(events);

       let html_template = '';

       events.forEach(eventsInfo=>{
           html_template+=`
           <div class="col-md-4 mt-4">
            
              <div class="card">
                    <div class="card-body">
                      <img  style="width: 250px; height: 200px; class= "img-fluid"  ; src="${eventsInfo.image!==null ? eventsInfo.image.url : '' }">

                    </div>
                    <div class= "card-body">
                       <div class="card-text">
                            <h2 class="text-center card-title">${eventsInfo.title.substring(0,30)}...</h2>
                            <p class="lead text-info">Event Information:</p>
                            <p>${eventsInfo.description!==null ? eventsInfo.description.substring(0,200) : ' '}...</p>
                            <span class="badge badge-primary">Venue: ${eventsInfo.city_name}</span>
                            <span class="badge badge-secondary">Date & Time: ${eventsInfo.start_time}</span>

                            <a href="${eventsInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">View More</a>
                       </div>

                    </div>
                </div>
                
            </div>  
           `;

       });

       this.result.innerHTML= html_template;
   }

    printCategories(){
        const categoriesList= eventbrite.getCategoriesApi()
                   .then(categories =>{
                      // console.log(categories.category);
                      const categoriesList=categories.category;
                      const categoriesSelect = document.querySelector('#category');

                      categories.category.forEach(category => {
                          const option = document.createElement('option');
                          option.value= category.id;
                          option.appendChild(document.createTextNode(category.name));
                          categoriesSelect.appendChild(option);
                          
                      });

                      

                   });
    }

   
   
}
