//jshint esversion: 8

class EventBrite{

    constructor()
    {
        this.token_auth= 'FRGFC6MSUVRUAOIC7DIP';// client secret=tdB_8QDCSeq6t0I9xDYuROkK4fbEAYwGn0bz5b0dZz8c5PmFBahX_A

       //access token= M3tVZv62gj06evCKup3vgclL06bhcfFZ1Ai9rer1
    }

    async queryAPI(eventName,category){
        

        const eventResponse = await fetch
       
       (`http://api.eventful.com/json/events/search/?app_key=YOUR_API_KEY&location=${eventName}&category=${category}`);
        
       const events =await eventResponse.json();
    

        return events;
       
    }


   async getCategoriesApi(){
       const categoriesResponse= await fetch
       ('http://api.eventful.com/json/categories/list?app_key=YOUR_API_KEY');
     

       const categories= await categoriesResponse.json();
       

       return categories;
    }
}