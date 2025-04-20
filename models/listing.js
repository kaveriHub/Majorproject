const mongoose=require("mongoose");
const{Schema}=mongoose;

const listingSchema=new Schema({
    title:{  
    type: String,
    required :true,
   },
    description:String,
    image:{
        filename:String,
    url:{  
        type: String,
        default:"https://unsplash.com/photos/aerial-view-of-a-lush-green-tropical-forest-3nFJAMYZwuY",
       set:(v) => v =="" ? "https://unsplash.com/photos/aerial-view-of-a-lush-green-tropical-forest-3nFJAMYZwuY" :v,
     },
    },
    price:String,
    location:String,
    country:String,
});

const Listing =mongoose.model("Listing",listingSchema);
module.exports=Listing;