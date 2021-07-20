import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      const newDelete = listings.filter((listing) => listing.id !== id)
      setListings(newDelete)
    })
  }

  const listingsComp = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete}/>
  })

  return (
    <main>
      <ul className="cards">
        {listingsComp}
      </ul>
    </main>
  );
}

export default ListingsContainer;
