const mongoose=require("mongoose");
const schema=mongoose.Schema;

const listingSchema=new Schema({
    title:String,
    descriptio:String,
    image:String,
    price:String,
    location:String,
    country:String,
});

const Listing =mongoose.model("Listing",listingSchema);
modules.export=Listing;