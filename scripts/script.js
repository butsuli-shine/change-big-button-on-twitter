window.onload = () => {
    const favoriteButton  = document.body.getElementsByClassName("r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi");

    const favoriteButtonArray  = Array.prototype.slice.call(favoriteButton)

    favoriteButtonArray.forEach(function(item: { className: string; }) {
        item.className = "big-button"
    });

    console.log("A")


}
